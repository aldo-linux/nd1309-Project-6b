module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Changed this to test agains Ganache UI instead of ganache-cli
      network_id: "*" // Match any network id
    }
  }
};