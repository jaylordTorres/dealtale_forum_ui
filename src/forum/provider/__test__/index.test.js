import { ForumProvider, useForum, useForumProvider } from "../index";

describe("unit test: forum/provider/index.js", () => {
  it("should correctly defined exports", async () => {
    expect(ForumProvider).toBeDefined();
    expect(useForum).toBeDefined();
    expect(useForumProvider).toBeDefined();
  });
});
