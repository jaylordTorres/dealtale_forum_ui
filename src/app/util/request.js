import axios from "axios";
import { config } from "../constant";
import { store } from "../service";

export async function fetcher({ queryKey }) {
  const init = await getInit();

  return (await axios.get(`${config.api}/${queryKey[0]}`, init)).data;
}

export async function poster(url, data) {
  const init = await getInit();

  return (await axios.post(`${config.api}/${url}`, data, init)).data;
}

export async function patcher(url, data) {
  const init = await getInit();

  return (await axios.patch(`${config.api}/${url}`, data, init)).data;
}

async function getInit(headers = {}) {
  const session = await store.session.getItem();

  return {
    headers: {
      "content-type": "application/json",
      app_client_key: config.client_key,
      app_session_id: session ? session.id : null,
      ...headers,
    },
  };
}
