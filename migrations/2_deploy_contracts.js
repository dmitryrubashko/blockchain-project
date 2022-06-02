const Message = artifacts.require("Message");

module.exports = async function (deployer) {
  await deployer.deploy(Message);
};