import axios from "axios";
import { config } from "../../../constant";
import { AppRequestBase } from "./request_base";

export class AppRequest extends AppRequestBase {
  session;
  constructor(sessionStore) {
    super();
    if (!sessionStore) {
      throw new Error("AppRequest require sessionStorage");
    }
    this.session = sessionStore;
  }

  fetcher = async ({ queryKey }) => {
    const init = await this.getInit();

    return (await axios.get(`${config.api}/${queryKey[0]}`, init)).data;
  };

  poster = async (url, data) => {
    const init = await this.getInit();

    return (await axios.post(`${config.api}/${url}`, data, init)).data;
  };

  patcher = async (url, data) => {
    const init = await this.getInit();

    return (await axios.patch(`${config.api}/${url}`, data, init)).data;
  };

  getInit = async (headers = {}) => {
    const session = await this.session.item();

    return {
      headers: {
        "content-type": "application/json",
        app_client_key: config.client_key,
        app_session_id: session ? session.id : null,
        ...headers,
      },
    };
  };
}
