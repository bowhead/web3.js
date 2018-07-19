#!/usr/bin/env node

var Web3 = require('../index.js');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:9634'));

var coinbase = web3.aht.coinbase;
console.log(coinbase);

var balance = web3.aht.getBalance(coinbase);
console.log(balance.toString(10));
