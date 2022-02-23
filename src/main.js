const { Blockchain, Transaction }= require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const myKey = ec.keyFromPrivate('76eb34f379bcd1209864158baf673e43888463211a76f8e74d1ccac4ef3a628b');
const myWalletAddress = myKey.getPublic('hex')
const publicKey = '04ed70580af40bb0e931bdfb9e04f003fe7580495c0f40d744a0bfe28fc1977dfc804a2a9d7a18fcd7e6eb2e3c6fb2ca74a326dd2db188392e8720cec201c386b3'

let ericCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, publicKey, 10)
tx1.signTransaction(myKey);
ericCoin.addTransaction(tx1);


console.log('\n Starting the miner...');
ericCoin.minePendingTransactions(myWalletAddress)

console.log('\n Balance of eric is:', ericCoin.getBalanceOfAddress(myWalletAddress));

//ericCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', ericCoin.isChainValid())
console.log(JSON.stringify(ericCoin, null ,4))