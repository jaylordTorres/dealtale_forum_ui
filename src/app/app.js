import { BrowserRouter } from "react-router-dom";
import { ServiceProvider, SessionProvider } from "./provider";
import { AppRouter } from "./router";
import { services } from "./service";

function App() {
  return (
    <div className="App">
      <ServiceProvider services={services}>
        <SessionProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </SessionProvider>
      </ServiceProvider>
    </div>
  );
}

export default App;
