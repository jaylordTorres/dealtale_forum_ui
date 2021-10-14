import { ForumProvider } from ".";
import { AppMockedRequest, MockedStorage } from "../../app/util/mock";
import { createTestProviers, faker } from "../../app/util/test";
import { forums } from "../data";

export const services = {
  stores: {
    session: new MockedStorage("session", { id: faker.datatype.uuid() }),
  },
  api: new AppMockedRequest({
    get: { forum: { data: forums } },
  }),
};

export function getForumTestUtils() {
  // provide all provider need on this forum module

  const wrapper = createTestProviers(services, ForumProvider);

  return {
    wrapper,
    services,
  };
}
