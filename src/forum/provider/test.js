import { createTestProviers, services } from "../../app/util/test";
import { forums } from "../data";
import { ForumProvider } from "./provider";

export function getForumTestWrapper() {
  // provide all providers need on this forum module

  return createTestProviers(services, ForumProvider);
}

export const data = {
  forums,
};
