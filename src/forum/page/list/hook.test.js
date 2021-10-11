import { cleanup, renderHook } from "@testing-library/react-hooks";

import { AppMockedRequest, MockedStorage } from "../../../app/util/mock";
import { createTestProviers, faker } from "../../../app/util/test";
import { useForumList } from "./hook";
import { forums } from "../../data";
import { ForumProvider } from "../../provider";

describe("forum/page/list/hook", () => {
  afterAll(cleanup);

  const services = {
    stores: {
      session: new MockedStorage("session", { id: faker.datatype.uuid() }),
    },
    api: new AppMockedRequest({
      forum: { data: forums },
    }),
  };

  const wrapper = createTestProviers(services, ForumProvider);

  it("should give correct return", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useForumList(), {
      wrapper,
    });

    await waitForNextUpdate();

    expect(result.current.values).toEqual(expect.any(Array));
    expect(result.current.onCreate).toEqual(expect.any(Function));
  });

  // todo: fix after forumProvider refactored
  // it("should fetch data", async () => {
  //   const { result, waitForNextUpdate } = renderHook(() => useForumList(), {
  //     wrapper,
  //   });

  //   // await waitForNextUpdate();
  //   expect(result.current.data).toStrictEqual(forums);
  // });
});
