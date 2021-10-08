import { BrowserRouter } from "react-router-dom";
import { ServiceProvider, SessionProvider } from "./provider";
import { AppRouter } from "./router";
import { store } from "./service";

function App() {
  return (
    <div className="App">
      <ServiceProvider store={store}>
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
