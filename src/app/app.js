import { BrowserRouter } from "react-router-dom";
import { ServiceProvider, SessionProvider } from "./provider";
import { RenderRoutes } from "./util";

export function Application({ children, routes, services }) {
  return (
    <div className="App">
      <ServiceProvider services={services}>
        <SessionProvider>
          <BrowserRouter>
            <RenderRoutes routes={routes} />
            {children}
          </BrowserRouter>
        </SessionProvider>
      </ServiceProvider>
    </div>
  );
}
