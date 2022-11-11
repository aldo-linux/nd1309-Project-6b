const HDWalletProvider = require("truffle-hdwallet-provider");
const infuraKey = "e9c44a4298a9463bb0cc8876220d8af7";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraKey}`),
      network_id: 5,       // goerli's id 
      gas: 4500000,        // goerli has a lower block limit than mainnet
      gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};