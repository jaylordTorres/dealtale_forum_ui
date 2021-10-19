import { useContext } from "react";
import { ServiceContext } from "./constant";

export function useService() {
  const service = useContext(ServiceContext);

  if (!service) {
    throw new Error("useService must be wrapped inside ServiceProvider.");
  }

  return { stores: service.stores, api: service.api };
}

// private
export function useServiceProvider({ stores, api }) {
  return {
    stores,
    api,
  };
}
