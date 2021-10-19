import {
  cleanup,
  render,
  screen,
  fireEvent,
  act,
} from "@testing-library/react";
import { renderHook, act as hookAct } from "@testing-library/react-hooks";
import { Application } from "../app";
import { useService } from "../provider/service/hook";
import { createRouter } from "../util";
import { services } from "../util/test";

describe("unit test: app/app.js", () => {
  it("should correctly defined exports", async () => {
    expect(Application).toBeDefined();
  });

  describe("render pages correctly", () => {
    beforeEach(() => {
      const routes = [
        createRouter("/test", (props) => (
          <TestAppPage {...props} nextPath="/">
            test page
          </TestAppPage>
        )),
        createRouter("/", (props) => (
          <TestAppPage {...props} nextPath="/test">
            root page
          </TestAppPage>
        )),
      ];
      render(<Application routes={routes} services={services} />);
    });

    afterEach(cleanup);

    it("should render root pages", async () => {
      expect(screen.getByText("root page")).toBeDefined();
    });

    it("should should be able to navigate", async () => {
      await act(async () => {
        fireEvent.click(screen.getByText("navigate_next"));
      });
      expect(screen.getByText("test page")).toBeDefined();

      await act(async () => {
        fireEvent.click(screen.getByText("navigate_next"));
      });
      expect(screen.getByText("root page")).toBeDefined();
    });
  });

  describe("provide service provider context correctly", () => {
    let rendered;
    beforeEach(async () => {
      await hookAct(async () => {
        rendered = renderHook(() => useTestAppPageServices(), {
          wrapper: ({ children }) => (
            <Application routes={[]} services={services}>
              {children}
            </Application>
          ),
        });
      });
    });

    beforeEach(cleanup);

    it("should have service api", () => {
      expect(rendered.result.current.api).toBeDefined();
      expect(rendered.result.current.api).not.toBeNull();
    });
    it("should have service stores", () => {
      expect(rendered.result.current.stores).toBeDefined();
      expect(rendered.result.current.stores).not.toBeNull();
    });

    it("should have service stores session", () => {
      expect(rendered.result.current.stores.session).toBeDefined();
      expect(rendered.result.current.stores.session).not.toBeNull();
    });
  });
});

function TestAppPage({ history, children, nextPath }) {
  return (
    <div>
      {children}
      <button
        onClick={() => {
          history.push(nextPath);
        }}
      >
        navigate_next
      </button>
    </div>
  );
}

function useTestAppPageServices() {
  const appServices = useService();
  return appServices;
}
