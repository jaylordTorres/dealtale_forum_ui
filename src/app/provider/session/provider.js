import { SessionContext } from "./constant";
import { useSessionProvider } from "./hook";

export function SessionProvider({ children }) {
  const value = useSessionProvider();

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}
