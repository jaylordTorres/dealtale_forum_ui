import { StorageBase } from "./local_store_base";

export class Storage extends StorageBase {
  key;

  constructor(key) {
    super();
    if (!key) {
      throw new Error("Store needs a key");
    }
    this.key = key;
  }

  save = async (data = {}) => {
    try {
      const value = JSON.stringify(data);
      return localStorage.setItem(this.key, value);
    } catch (e) {
      throw new Error(`Failed to save ${this.key}: ${data}`);
    }
  };

  item = async () => {
    try {
      const value = await localStorage.getItem(this.key);
      return JSON.parse(value);
    } catch (e) {
      throw new Error(`Failed parse ${this.key}: $[value} `);
    }
  };
}
