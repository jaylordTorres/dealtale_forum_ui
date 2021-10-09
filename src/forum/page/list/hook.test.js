import { renderHook } from "@testing-library/react-hooks";

import { AppMockedRequest, MockedStorage } from "../../../app/util/mock";
import { createTestProviers } from "../../../app/util/test";
import { useForumList } from "./hook";

describe("forum/page/list/hook", () => {
  it("should fetch data", async () => {
    const services = {
      stores: {
        session: new MockedStorage("session", { id: "sample" }),
      },
      api: new AppMockedRequest({
        forum: { data: [{ id: "sampleid" }] },
      }),
    };

    const wrapper = createTestProviers(services);
    const { result, waitForNextUpdate } = renderHook(() => useForumList(), {
      wrapper,
    });

    await waitForNextUpdate();

    expect(result.current.data).toStrictEqual([{ id: "sampleid" }]);
  });
});
