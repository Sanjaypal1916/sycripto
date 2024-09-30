// /** 
//  * @type import('hardhat/config').HardhatUserConfig
//  *  */

// const { network } = require('hardhat');

require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/C8TCLjGqdfZOIa3eRu6eQpr6uSFWo541',
      accounts: ['enter the private key of your blockchain application']
    }
  }
};
