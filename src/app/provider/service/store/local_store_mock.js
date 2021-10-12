import { StorageBase } from "./local_store_base";

export class MockedStorage extends StorageBase {
  key;

  constructor(key, data = {}) {
    super();
    if (!key) {
      throw new Error("Store needs a key");
    }
    this.key = key;
  }

  save = async (data = {}) => {
    return;
  };

  item = async () => {
    return this.data;
  };

  load = async (fn, d) => {
    return fn(d);
  };
}
