import { cleanup } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { createTestProviers } from "../../app/util/test";
import { forums } from "../data";
import { useForum, useForumProvider } from "./hook";
import { getForumTestUtils, services } from "./test";

describe("unit test: forum/provider/hook: useForum", () => {
  afterAll(cleanup);
  const { wrapper } = getForumTestUtils();
  const { result } = renderHook(() => useForum(), { wrapper });

  it("should correctly defined exports", async () => {
    expect(useForum).toBeDefined();
  });

  it("should give correct return types", async () => {
    expect(result.current.values).toEqual(expect.any(Array));
    expect(result.current.update).toEqual(expect.any(Function));
    expect(result.current.create).toEqual(expect.any(Function));
  });

  it("should fetch valid data", async () => {
    expect(result.current.values).toStrictEqual(forums);
  });
});

describe("unit test: forum/provider/hook: useForumProvider", () => {
  afterAll(cleanup);
  const wrapper = createTestProviers(services);
  const { result } = renderHook(() => useForumProvider(), { wrapper });

  it("should correctly defined exports", async () => {
    expect(useForumProvider).toBeDefined();
  });

  it("should give correct return types", async () => {
    expect(result.current.values).toEqual(expect.any(Array));
    expect(result.current.update).toEqual(expect.any(Function));
    expect(result.current.create).toEqual(expect.any(Function));
  });

  it("should fetch valid data", async () => {
    expect(result.current.values).toStrictEqual(forums);
  });
});
