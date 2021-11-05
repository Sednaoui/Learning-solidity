const HelloWorld = artifacts.require("HelloWorld");
const Counter = artifacts.require("Counter");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(Counter);
};
