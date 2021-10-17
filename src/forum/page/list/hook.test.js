import { cleanup } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { QueryClientInstance } from "../../../app/provider";

import { getForumTestWrapper, data, api } from "../../provider/test";
import { useForumList } from "./hook";

describe("unit test: forum/page/list/hook", () => {
  const forums = data.forums;

  const wrapper = getForumTestWrapper();

  let rendered;
  beforeEach(async () => {
    jest.spyOn(api, "fetcher").mockImplementation(() => {
      return { data: forums };
    });
    await act(async () => {
      rendered = renderHook(() => useForumList(), {
        wrapper,
      });
    });
  });

  afterEach(() => {
    cleanup();
    QueryClientInstance.clear();
  });

  it("should correctly defined exports", async () => {
    expect(useForumList).toBeDefined();
  });

  it("should give correct return types", async () => {
    expect(rendered.result.current.values).toEqual(expect.any(Array));
    expect(rendered.result.current.onCreate).toEqual(expect.any(Function));
  });

  it("should fetch valid data", async () => {
    expect(rendered.result.current.values).toStrictEqual(forums);
  });
});
