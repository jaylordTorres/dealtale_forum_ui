import { BrowserRouter } from "react-router-dom";
import { ServiceProvider, SessionProvider } from "../provider";
import { MockedStorage } from "./mock";
import { datatype } from "faker";
import { AppRequest } from "../provider/service/api/request";

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

export const MockedSessionStorage = new MockedStorage("session", {
  id: datatype.uuid(),
});

export const api = new AppRequest(MockedSessionStorage);

export const services = {
  stores: {
    session: MockedSessionStorage,
  },
  api: api,
};
