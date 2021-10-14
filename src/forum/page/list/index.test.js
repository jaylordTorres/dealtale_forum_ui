import { cleanup, render, screen, act } from "@testing-library/react";
import { getForumTestUtils } from "../../provider/test";
import { forums } from "../../data";
import { ForumListPage } from "./index";

describe("unit test: forum/page/list/index", () => {
  const { wrapper: Providers } = getForumTestUtils();

  beforeEach(() => {
    act(() => {
      render(
        <Providers>
          <ForumListPage />
        </Providers>
      );
    });
  });
  afterEach(cleanup);

  it("should correctly defined exports", async () => {
    expect(ForumListPage).toBeDefined();
  });

  it("should display add list button", async () => {
    expect(screen.getByText("Add listing").tagName).toBe("BUTTON");
  });

  it("should display forum listing", async () => {
    for (const i in forums) {
      expect(screen.getByText(forums[i].title)).toBeDefined();
      expect(screen.getByText(forums[i].content)).toBeDefined();
    }
  });
});
