import { cleanup, screen, render } from "@testing-library/react";
import { api } from "../../../../app/util/test";
import { getForumTestWrapper, data } from "../../../provider/test";
import { QueryClientInstance } from "../../../../app/provider";
import { ForumListPage } from "../index";

const forums = data.forums;
const wrapper = getForumTestWrapper();

describe("unit test: forum/page/list/index", () => {
  beforeEach(() => {
    jest.spyOn(api, "fetcher").mockImplementation(() => {
      return { data: forums };
    });

    render(<ForumListPage />, {
      wrapper,
    });
  });

  afterEach(() => {
    cleanup();
    QueryClientInstance.clear();
  });

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
