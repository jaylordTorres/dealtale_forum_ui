import { AppRequest } from "./api/request";
import { Storage } from "./store/local_store";

export function getServices() {
  return {
    stores: {
      session: new Storage("session"),
    },

    api: new AppRequest(new Storage("session")),
  };
}
