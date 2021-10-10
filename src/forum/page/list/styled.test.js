import { cleanup } from "@testing-library/react-hooks";

import { StyledForumList } from "./styled";

describe("forum/page/list/styled", () => {
  afterAll(cleanup);

  it("should defined StyledForumList", async () => {
    expect(StyledForumList).toBeDefined();
  });

  // todo: create snopshot test
});
