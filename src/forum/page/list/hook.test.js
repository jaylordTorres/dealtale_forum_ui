import { cleanup, renderHook } from "@testing-library/react-hooks";

import { forums } from "../../data";
import { getForumTestUtils } from "../../provider/test";
import { useForumList } from "./hook";

describe("unit test: forum/page/list/hook", () => {
  afterAll(cleanup);

  const { wrapper } = getForumTestUtils();

  const { result } = renderHook(() => useForumList(), {
    wrapper,
  });

  it("should correctly defined exports", async () => {
    expect(useForumList).toBeDefined();
  });

  it("should give correct return types", async () => {
    expect(result.current.values).toEqual(expect.any(Array));
    expect(result.current.onCreate).toEqual(expect.any(Function));
  });

  it("should fetch valid data", async () => {
    expect(result.current.values).toStrictEqual(forums);
  });
});
