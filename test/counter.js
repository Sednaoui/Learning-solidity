const Counter = artifacts.require("Counter");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Counter", function (/* accounts */) {
    it("it should count to 2", async function () {
        await Counter.deployed().then(async (counter) => {
            await counter.inc();
            await counter.inc();
            const response = await counter.get();
            assert.equal(response.toNumber(), 2, "counter should be 2");
        })
    })
});
