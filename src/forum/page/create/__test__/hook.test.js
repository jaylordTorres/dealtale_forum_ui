import { cleanup } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import { api } from "../../../../app/util/test";
import { getForumTestWrapper } from "../../../provider/test";
import { useForumCreate } from "../hook";

describe("unit test: forum/page/create/hook.js", () => {
  const wrapper = getForumTestWrapper();
  const onPost = jest.fn();
  const onFetch = jest.fn();

  let rendered;

  beforeEach(async () => {
    jest.spyOn(api, "fetcher").mockImplementation(onFetch);
    jest.spyOn(api, "poster").mockImplementation(onPost);
    await act(async () => {
      rendered = renderHook(() => useForumCreate(), {
        wrapper,
      });
    });
  });
  afterEach(() => {
    onPost.mockReset();
    cleanup();
  });

  it("should correctly defined exports", () => {
    expect(useForumCreate).toBeDefined();
  });

  it("should give correct return types", async () => {
    expect(rendered.result.current.onCreate).toEqual(expect.any(Function));
    expect(rendered.result.current.onCancel).toEqual(expect.any(Function));
  });

  it("should trigger post when onCreate triggered", async () => {
    // reset preload data
    onFetch.mockReset();
    await act(async () => {
      rendered.result.current.onCreate({});
    });
    expect(onPost).toBeCalledTimes(1);

    // refetch data after successfull create request
    expect(onFetch).toBeCalledTimes(1);
  });
});
