import {
  api,
  data,
  MockedSessionStorage,
  getForumTestWrapper,
  services,
} from "../test";

describe("unit test: forum/provider/index.js", () => {
  it("should correctly defined exports", async () => {
    expect(api).toBeDefined();
    expect(data).toBeDefined();
    expect(getForumTestWrapper).toBeDefined();
    expect(MockedSessionStorage).toBeDefined();
    expect(services).toBeDefined();
  });
});
