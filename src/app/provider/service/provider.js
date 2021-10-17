import { ServiceContext } from "./constant";
import { useServiceProvider } from "./hook";
import { QueryClientProvider } from "react-query";
import { QueryClientInstance } from "./constant";

export function ServiceProvider({ services, children }) {
  const value = useServiceProvider(services);

  return (
    <ServiceContext.Provider value={value}>
      <QueryClientProvider client={QueryClientInstance}>
        {children}
      </QueryClientProvider>
    </ServiceContext.Provider>
  );
}
