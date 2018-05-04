var chai = require('chai');
var assert = chai.assert; 
var Web3 = require('../index.js');
var web3 = new Web3();
var u = require('./helpers/test.utils.js');

describe('web3.aht', function() {
    describe('methods', function() {
        u.methodExists(web3.aht, 'getBalance');
        u.methodExists(web3.aht, 'getStorageAt');
        u.methodExists(web3.aht, 'getTransactionCount');
        u.methodExists(web3.aht, 'getCode');
        u.methodExists(web3.aht, 'sendTransaction');
        u.methodExists(web3.aht, 'call');
        u.methodExists(web3.aht, 'getBlock');
        u.methodExists(web3.aht, 'getTransaction');
        u.methodExists(web3.aht, 'getUncle');
        u.methodExists(web3.aht, 'getCompilers');
        u.methodExists(web3.aht.compile, 'lll');
        u.methodExists(web3.aht.compile, 'solidity');
        u.methodExists(web3.aht.compile, 'serpent');
        u.methodExists(web3.aht, 'getBlockTransactionCount');
        u.methodExists(web3.aht, 'getBlockUncleCount');
        u.methodExists(web3.aht, 'filter');
        u.methodExists(web3.aht, 'contract');

        u.propertyExists(web3.aht, 'coinbase');
        u.propertyExists(web3.aht, 'mining');
        u.propertyExists(web3.aht, 'gasPrice');
        u.propertyExists(web3.aht, 'accounts');
        u.propertyExists(web3.aht, 'defaultBlock');
        u.propertyExists(web3.aht, 'blockNumber');
        u.propertyExists(web3.aht, 'protocolVersion');
    });
});

