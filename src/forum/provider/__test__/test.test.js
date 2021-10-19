import { data, getForumTestWrapper } from "../test";

describe("unit test: forum/provider/index.js", () => {
  it("should correctly defined exports", async () => {
    expect(data).toBeDefined();
    expect(getForumTestWrapper).toBeDefined();
  });
});
