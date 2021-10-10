import { BrowserRouter } from "react-router-dom";
import { ServiceProvider, SessionProvider } from "../provider";

export * as faker from "faker";

// // dependecies
// export const services = {
//   session: Store("session"),
//   // initialize more services here
// };

export function createTestProviers(services) {
  return ({ children }) => (
    <ServiceProvider services={services}>
      <SessionProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </SessionProvider>
    </ServiceProvider>
  );
}
