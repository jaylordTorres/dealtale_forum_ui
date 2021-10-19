import { cleanup } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import { QueryClientInstance } from "../../../app/provider";
import { api, createTestProviers, services } from "../../../app/util/test";
import { forums } from "../../data";
import { useForum, useForumProvider } from "../hook";

import { getForumTestWrapper } from "../test";

describe("unit test: forum/provider/hook: useForum", () => {
  const wrapper = getForumTestWrapper();
  let rendered;
  beforeEach(async () => {
    jest.spyOn(api, "fetcher").mockImplementation(() => {
      return { data: forums };
    });
    await act(async () => {
      rendered = renderHook(() => useForum(), {
        wrapper,
      });
    });
  });

  afterEach(() => {
    cleanup();
    QueryClientInstance.clear();
  });
  it("should correctly defined exports", async () => {
    expect(useForum).toBeDefined();
  });

  it("should give correct return types", async () => {
    expect(rendered.result.current.values).toEqual(expect.any(Array));
    expect(rendered.result.current.update).toEqual(expect.any(Function));
    expect(rendered.result.current.create).toEqual(expect.any(Function));
  });

  it("should fetch valid data", async () => {
    expect(rendered.result.current.values).toStrictEqual(forums);
  });
});

describe("unit test: forum/provider/hook: useForumProvider", () => {
  const wrapper = createTestProviers(services);
  let rendered;
  beforeEach(async () => {
    jest.spyOn(api, "fetcher").mockImplementation(() => {
      return { data: forums };
    });
    await act(async () => {
      rendered = renderHook(() => useForumProvider(), { wrapper });
    });
  });

  afterEach(() => {
    cleanup();
    QueryClientInstance.clear();
  });

  it("should correctly defined exports", async () => {
    expect(useForumProvider).toBeDefined();
  });

  it("should give correct return types", async () => {
    expect(rendered.result.current.values).toEqual(expect.any(Array));
    expect(rendered.result.current.update).toEqual(expect.any(Function));
    expect(rendered.result.current.create).toEqual(expect.any(Function));
  });

  it("should fetch valid data", async () => {
    expect(rendered.result.current.values).toStrictEqual(forums);
  });
});
