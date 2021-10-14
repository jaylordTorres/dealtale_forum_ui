import { AppRequestBase } from "./request_base";

// todo: process data on mutation
export class AppMockedRequest extends AppRequestBase {
  data;

  constructor(data = {}) {
    super();
    this.data = data;
  }

  fetcher = async ({ queryKey }) => {
    return this.data["get"][queryKey];
  };

  poster = async (url, data) => {
    return this.data["post"][url];
  };

  patcher = async (url, data) => {
    return this.data["put"][url];
  };
}
