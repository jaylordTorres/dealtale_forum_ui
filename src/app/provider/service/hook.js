import { useContext } from "react";
import { ServiceContext } from "./constant";

export function useService() {
  const service = useContext(ServiceContext);

  if (!service) {
    throw new Error("useService must be wrapped inside ServiceProvider.");
  }

  return { store: service.store };
}

// private
export function useServiceProvider({ store, api }) {
  return {
    store: store ? store : {},
    api: api ? api : {},
  };
}
