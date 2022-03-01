const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');

const provider = new HDWalletProvider(
    'subway hood bright live acquire blame grunt anger near review train category',
    'https://rinkeby.infura.io/v3/0d925ba77ebc4647bf6304df79f318a1'
);

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();

    console.log('The contract would be deployed from ', accounts[0]);

    const results = await new web3.eth.Contract(abi)
        .deploy({ data : evm.bytecode.object, arguments : ['Hi there!']})
        .send({ from : accounts[0], gas : '1000000'});

    console.log('The contract would be deployed to ', results.options.address);

    provider.engine.stop();
}

deploy();