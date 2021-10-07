import { ServiceContext } from "./constant";
import { useServiceProvider } from "./hook";

export function ServiceProvider({ store, children }) {
  const value = useServiceProvider({ store });

  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
}
