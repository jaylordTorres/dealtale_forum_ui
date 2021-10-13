import { cleanup, render, screen, act } from "@testing-library/react";
import { getForumTestUtils } from "../../provider/test";
import { createForumItem } from "../../data";
import { UiForumListing } from "./ui";

describe("unit test: forum/page/list/index", () => {
  afterEach(cleanup);

  const values = [createForumItem(), createForumItem()];
  const { wrapper: Providers } = getForumTestUtils();

  it("should correctly defined exports", async () => {
    expect(UiForumListing).toBeDefined();
  });

  it("should display all forum listing", async () => {
    await act(async () => {
      render(
        <Providers>
          <UiForumListing onCreate={() => {}} values={values} />
        </Providers>
      );
    });

    for (const i in values) {
      expect(screen.getByText(values[i].title)).toBeDefined();
      expect(screen.getByText(values[i].content)).toBeDefined();
    }
  });

  it("should display add list button", async () => {
    await act(async () => {
      render(
        <Providers>
          <UiForumListing onCreate={() => {}} values={values} />
        </Providers>
      );
    });

    expect(screen.getByText("Add listing").tagName).toBe("BUTTON");
  });
});
