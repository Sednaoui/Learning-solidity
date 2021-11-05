const Primitives = artifacts.require("Primitives");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Primitives", function (/* accounts */) {
  it("should assert true", async function () {
    const defaultAddress = await Primitives.deployed().then((res) => res.defaultAddr());
    assert.equal(defaultAddress, "0x0000000000000000000000000000000000000000");
  });
});
