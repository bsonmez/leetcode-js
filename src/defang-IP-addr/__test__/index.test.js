const { defangIPaddr } = require("../index");

describe("Count Primes", () => {
  it("Should convert ip", () => {
    expect(defangIPaddr("1.1.1.1")).toEqual("1[.]1[.]1[.]1");
  });
});
