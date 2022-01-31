require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remain million grid gloom swift tray'; 
let testAccounts = [
"0x84af80a6f77ad9ca6ab11555e21657b706951fcc3e0299d37917ea57dc0297df",
"0x6549967eba062678b572b7f32f776f0d57c22b88aa386d965100f438223259de",
"0xa5d83426808ffc71847867eddd1107db0abc81b3a185eb5ad1961b7266bea73d",
"0x4b336bc60071f3e786bcb6964d77ba82fdfdea0b442af97eb50abe5f41c37308",
"0x8badb4715f31d8a2736427255528214f8407d2d1ed65ce8c21ae3f33387ec6ab",
"0x24678c80f650c91d0093ac241a62e4a0eb8edb1f895f0abef259c369f37ab499",
"0x488eeb7776014a0db264978b16ffc95caab0063b52b770a9798823e8eee2d471",
"0xbbde37b7cac96dbaa59115c275f554cdb5da460ea934d61a78f34dfb4bfc6cbf",
"0x9d91fe7d0a4804beef3248456fb028a3ad5ac77c57dd6a10bb8f84803aedfc1a",
"0x104a606067a3edc23e042e47366ac14ef55854afa7a8a0cc70677e6e0b2781e1"
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
            version: '^0.8.0'
        }
    }
};

