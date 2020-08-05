const { minRemoveToMakeValid } = require("../index");

describe("Min Remove to Make Valid", () => {
  it("Should remove extra parantheses from the string", () => {
    expect(minRemoveToMakeValid("lee(t(c)o)de)")).toBe("lee(t(c)o)de");
  });

  it("Should remove extra parantheses from the string", () => {
    expect(minRemoveToMakeValid("a)b(c)d")).toBe("ab(c)d");
  });

  it("Should remove extra parantheses from the string", () => {
    expect(minRemoveToMakeValid("))((")).toBe("");
  });

  it("Should remove extra parantheses from the string", () => {
    expect(minRemoveToMakeValid("(a(b(c)d)")).toBe("a(b(c)d)");
  });
});
