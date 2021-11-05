const HelloWorld = artifacts.require("HelloWorld");
const Counter = artifacts.require("Counter");
const Primitives = artifacts.require("Primitives");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(Counter);
  deployer.deploy(Primitives);
};
