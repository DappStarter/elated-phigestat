require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift return payment coconut grace option blue trumpet'; 
let testAccounts = [
"0x470d127c96b3a262bd6dc5fc95e5b81e1e0322bba3245aa9e8b9fa154d659b66",
"0xd529481586abe0a4f102e31f794adcb59bcd863ae49d0f266c49c8e0ef0d4fcc",
"0xa0c9a7f0e7b5709f929d1908bc0f9ef3cb467ce37f4bbb6b60ffc11a1d2a8229",
"0xf32083715772769abf928340c7c5b96046a8bdfa82c93d9c14b0df5d8884d607",
"0x929761c32ba046546aa62177a261abea64f6fedb31785562a96bb733310367b3",
"0x739ad91d2eb246f7654f4538842ebc2425d94f6ca1936bfc4a50d960f86600c8",
"0x265cd94c83a2d0edf303b23c4916b40d3926896777ecf02e4c474cc3d95333c4",
"0x5921cafd9902f0e28a4959f5e70b8eb44f2245c494f16c27f7edaf73af84480e",
"0x1beb3d6284668d20190a61b23270457d221dffa926e35704fc137c405441a088",
"0x2dc65d982bbc9cfd4a0420951c6352ec96750b1f58fb471b9de26dd49965af86"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
