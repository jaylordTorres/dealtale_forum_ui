import { cleanup, renderHook } from "@testing-library/react-hooks";

import { AppMockedRequest, MockedStorage } from "../../../app/util/mock";
import { createTestProviers, faker } from "../../../app/util/test";
import { useForumList } from "./hook";
import { forums } from "../../data";
import { ForumProvider } from "../../provider";
import { getForumTestUtils } from "../../provider/test";

describe("unit test: forum/page/list/hook", () => {
  afterAll(cleanup);

  const { wrapper } = getForumTestUtils();

  const { result } = renderHook(() => useForumList(), {
    wrapper,
  });

  it("should correctly defined exports", async () => {
    expect(useForumList).toEqual(expect.any(Function));
  });

  it("should give correct return types", async () => {
    expect(result.current.values).toEqual(expect.any(Array));
    expect(result.current.onCreate).toEqual(expect.any(Function));
  });

  it("should fetch valid data", async () => {
    expect(result.current.values).toStrictEqual(forums);
  });
});
