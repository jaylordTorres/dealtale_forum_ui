import { BrowserRouter } from "react-router-dom";
import { ServiceProvider, SessionProvider } from "../provider";

// utils of fake data
export * as faker from "faker";


export function createTestProviers(
  services,
  Wrapper = ({ children }) => children
) {
  return ({ children }) => (
    <ServiceProvider services={services}>
      <SessionProvider>
        <BrowserRouter>
          <Wrapper>{children}</Wrapper>
        </BrowserRouter>
      </SessionProvider>
    </ServiceProvider>
  );
}
