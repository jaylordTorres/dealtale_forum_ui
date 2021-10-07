import { BrowserRouter } from "react-router-dom";
import { ServiceProvider, Store, SessionProvider } from "./provider";
import { AppRouter } from "./router";

// dependecies
const store = {
  session: Store("session"),
  // initialize more services here
};

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
