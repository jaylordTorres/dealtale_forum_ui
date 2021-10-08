import { ServiceContext } from "./constant";
import { useServiceProvider } from "./hook";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

export function ServiceProvider({ store, children }) {
  const value = useServiceProvider({ store });

  return (
    <ServiceContext.Provider value={value}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </ServiceContext.Provider>
  );
}
