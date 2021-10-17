import { MockedStorage } from "../../app/util/mock";
import { createTestProviers, faker } from "../../app/util/test";
import { AppRequest } from "../../app/provider/service/api/request";
import { forums } from "../data";
import { ForumProvider } from "./provider";

export const MockedSessionStorage = new MockedStorage("session", {
  id: faker.datatype.uuid(),
});

export const api = new AppRequest(MockedSessionStorage);

export const services = {
  stores: {
    session: MockedSessionStorage,
  },
  api: api,
};

export function getForumTestWrapper() {
  // provide all providers need on this forum module

  return createTestProviers(services, ForumProvider);
}

export const data = {
  forums,
};
