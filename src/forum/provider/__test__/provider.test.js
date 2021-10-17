import { useContext } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import { QueryClientInstance } from "../../../app/provider";
import { createTestProviers } from "../../../app/util/test";
import { forums } from "../../data";
import { ForumContext } from "../constant";
import { ForumProvider } from "../provider";
import { api, services } from "../test";

const Providers = createTestProviers(services);
const wrapper = ({ children }) => (
  <Providers>
    <ForumProvider>{children}</ForumProvider>
  </Providers>
);

function useTestForumProviderHook() {
  const { create, update, values } = useContext(ForumContext);
  return {
    create,
    update,
    values,
  };
}

function TestForumProviderChild() {
  const { values } = useTestForumProviderHook();

  return (
    <div>
      {values.map((i) => (
        <div key={i._id}>
          <div>{i._id}</div>
          <div>{i.sessionId}</div>
          <div>{i.title}</div>
          <div>{i.content}</div>
        </div>
      ))}
    </div>
  );
}

describe("unit test: forum/provider/provider.js", () => {
  it("should correctly defined exports", async () => {
    expect(ForumProvider).toBeDefined();
  });

  describe("provider provide context values", () => {
    let rendered;
    let onUpdate = jest.fn();
    let onCreate = jest.fn();
    beforeEach(async () => {
      jest.spyOn(api, "fetcher").mockImplementation(() => {
        return { data: forums };
      });

      jest.spyOn(api, "poster").mockImplementation((_, d = {}) => {
        onCreate();
        return { data: d };
      });
      jest.spyOn(api, "patcher").mockImplementation((_, d) => {
        onUpdate();
        return { data: d };
      });

      await act(async () => {
        rendered = renderHook(() => useTestForumProviderHook(), {
          wrapper,
        });
      });
    });

    afterEach(() => {
      cleanup();
      QueryClientInstance.clear();
      jest.resetAllMocks();
    });
    it("should give correct return types", async () => {
      expect(rendered.result.current.values).toEqual(expect.any(Array));
      expect(rendered.result.current.create).toEqual(expect.any(Function));
      expect(rendered.result.current.update).toEqual(expect.any(Function));
    });

    it("should fetch valid data", async () => {
      expect(rendered.result.current.values).toStrictEqual(forums);
    });

    it("should call post when create triggered", async () => {
      await act(async () => {
        rendered.result.current.create({ values: {} });
      });
      expect(onCreate).toHaveBeenCalledTimes(1);
    });
    it("should call patch when update triggered", async () => {
      await act(async () => {
        rendered.result.current.update({ values: {}, id: "" });
      });
      expect(onUpdate).toHaveBeenCalledTimes(1);
    });
  });

  describe("rendering ForumProvider", () => {
    beforeEach(async () => {
      jest.spyOn(api, "fetcher").mockImplementation(() => {
        return { data: forums };
      });

      render(<TestForumProviderChild />, { wrapper });
    });

    afterEach(() => {
      cleanup();
      QueryClientInstance.clear();
    });

    it("should list all data", () => {
      for (const i in forums) {
        expect(screen.getByText(forums[i]._id)).toBeDefined();
        expect(screen.getByText(forums[i].title)).toBeDefined();
        expect(screen.getByText(forums[i].content)).toBeDefined();
        expect(screen.getByText(forums[i].sessionId)).toBeDefined();
      }
    });
  });
});
