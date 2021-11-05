const Variables = artifacts.require("Variables");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Variables", function (/* accounts */) {
  it("should assert true", async function () {
    const response = await Variables.deployed();
    const text = await response.text();
    const num = await response.num();
    const somethingReturned = await response.doSomething();
    assert.equal(text, "Hello");
    assert.equal(num, 123);
    assert.equal(somethingReturned.i, undefined);
  });
});
