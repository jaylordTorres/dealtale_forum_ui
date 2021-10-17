import { cleanup } from "@testing-library/react-hooks";

import { StyledForumList } from "../styled";

describe("unit test: forum/page/list/styled", () => {
  afterAll(cleanup);

  it("should correctly defined exports", async () => {
    expect(StyledForumList).toBeDefined();
  });

  // todo: create snopshot test
});
