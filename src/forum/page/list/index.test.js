import { cleanup, render, screen, act } from "@testing-library/react";
import { getForumTestUtils } from "../../provider/test";
import { forums } from "../../data";
import { ForumListPage } from "./index";

describe("unit test: forum/page/list/index", () => {
  afterEach(cleanup);
  const { wrapper: Providers } = getForumTestUtils();

  it("should correctly defined exports", async () => {
    expect(ForumListPage).toBeDefined();
  });

  it("should display add list button", async () => {
    await act(async () => {
      render(
        <Providers>
          <ForumListPage />
        </Providers>
      );
    });

    expect(screen.getByText("Add listing")).toBe("BUTTON");
  });

  it("should display forum listing", async () => {
    await act(async () => {
      render(
        <Providers>
          <ForumListPage />
        </Providers>
      );
    });

    for (const i in forums) {
      expect(screen.getByText(forums[i].title)).toBeDefined();
      expect(screen.getByText(forums[i].content)).toBeDefined();
    }
  });
});
