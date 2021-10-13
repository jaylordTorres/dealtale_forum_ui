import { ForumProvider } from ".";
import { AppMockedRequest, MockedStorage } from "../../app/util/mock";
import { createTestProviers, faker } from "../../app/util/test";
import { forums } from "../data";

export function getForumTestUtils() {
  // provide all provider need on this forum module
  const services = {
    stores: {
      session: new MockedStorage("session", { id: faker.datatype.uuid() }),
    },
    api: new AppMockedRequest({
      forum: { data: forums },
    }),
  };

  const wrapper = createTestProviers(services, ForumProvider);

  return {
    wrapper,
  };
}
