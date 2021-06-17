const { restoreString } = require("../index");

describe("Restore String", () => {
  it("Should reorder the string", () => {
    const string = "codeleet";
    const indices = [4, 5, 6, 7, 0, 2, 1, 3];
    expect(restoreString(string, indices)).toBe("leetcode");
  });

  it("Should reorder the string", () => {
    const string = "abc";
    const indices = [0, 1, 2];
    expect(restoreString(string, indices)).toBe("abc");
  });

  it("Should reorder the string", () => {
    const string = "aiohn";
    const indices = [3, 1, 4, 2, 0];
    expect(restoreString(string, indices)).toBe("nihao");
  });

  it("Should reorder the string", () => {
    const string = "aaiougrt";
    const indices = [4, 0, 2, 6, 7, 3, 1, 5];
    expect(restoreString(string, indices)).toBe("arigatou");
  });

  it("Should reorder the string", () => {
    const string = "art";
    const indices = [1, 0, 2];
    expect(restoreString(string, indices)).toBe("rat");
  });
});
