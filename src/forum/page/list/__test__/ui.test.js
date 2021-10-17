import {
  cleanup,
  render,
  screen,
  act,
  fireEvent,
} from "@testing-library/react";
import { getForumTestWrapper } from "../../../provider/test";
import { createForumItem } from "../../../data";
import { UiForumListing } from "../ui";

describe("unit test: forum/page/list/ui", () => {
  let onClick;
  const values = [createForumItem(), createForumItem()];
  const Providers = getForumTestWrapper();

  beforeEach(async () => {
    onClick = jest.fn();
    // act(() => {
    render(
      <Providers>
        <UiForumListing onCreate={onClick} values={values} />
      </Providers>
    );
    // });
  });

  afterEach(() => {
    onClick = null;
    cleanup();
  });

  it("should correctly defined exports", async () => {
    expect(UiForumListing).toBeDefined();
  });

  it("should display all forum items", async () => {
    for (const i in values) {
      expect(screen.getByText(values[i].title)).toBeDefined();
      expect(screen.getByText(values[i].content)).toBeDefined();
    }
  });

  it("should display add list button", async () => {
    expect(screen.getByText("Add listing").tagName).toBe("BUTTON");
  });

  it("should Add list button work correctly", async () => {
    act(() => {
      fireEvent.click(screen.getByText("Add listing"));
    });

    expect(onClick).toHaveBeenCalled();
  });
});
