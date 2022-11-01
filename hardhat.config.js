require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
const { alchemyApiKey, mnemonic } = require("./secret.json");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.5",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${alchemyApiKey}`,
      accounts: { mnemonic: mnemonic },
      chainId: 5,
    },
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
  },
};
