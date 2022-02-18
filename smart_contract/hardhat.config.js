// https://eth-ropsten.alchemyapi.io/v2/uW4QmLUJDx4ozLkxrBAX235PrtFhCPPJ

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/uW4QmLUJDx4ozLkxrBAX235PrtFhCPPJ",
      accounts: [
        "ce85df7eaf55ed9e93e92064c209db5b517bd87c74f7938d5bd054e9c0b3a94c",
      ],
    },
  },
};
