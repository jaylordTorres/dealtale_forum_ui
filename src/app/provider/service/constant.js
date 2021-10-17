import { createContext } from "react";
import { QueryClient } from "react-query";

export const ServiceContext = createContext({
  store: null,
});

export const QueryClientInstance = new QueryClient();
