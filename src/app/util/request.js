import axios from "axios";
import { config } from "../constant";
import { store } from "../service";

export async function fetcher({ queryKey }) {
  const session = await store.session.getItem();
  const init = {
    headers: {
      "content-type": "application/json",
      app_client_key: config.client_key,
      app_session_id: session ? session.id : null,
    },
  };

  return (await axios.get(`${config.api}/${queryKey[0]}`, init)).data;
}
