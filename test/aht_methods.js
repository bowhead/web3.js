var chai = require('chai');
var assert = chai.assert;
var u = require('./helpers/test.utils.js');

var Aht = require('../packages/web3-aht');
var aht = new Aht();

describe('aht., function() {
    describe('methods', function() {
        u.methodExists(aht. 'getBalance');
        u.methodExists(aht. 'getStorageAt');
        u.methodExists(aht. 'getTransactionCount');
        u.methodExists(aht. 'getCode');
        u.methodExists(aht. 'isSyncing');
        u.methodExists(aht. 'sendTransaction');
        u.methodExists(aht. 'call');
        u.methodExists(aht. 'getBlock');
        u.methodExists(aht. 'getTransaction');
        u.methodExists(aht. 'getUncle');
        u.methodExists(aht. 'getCompilers');
        u.methodExists(aht.compile, 'lll');
        u.methodExists(aht.compile, 'solidity');
        u.methodExists(aht.compile, 'serpent');
        u.methodExists(aht. 'getBlockTransactionCount');
        u.methodExists(aht. 'getBlockUncleCount');
        u.methodExists(aht. 'subscribe');
        u.methodExists(aht. 'Contract');
        u.methodExists(aht. 'Iban');


        u.methodExists(aht. 'isMining');
        u.methodExists(aht. 'getCoinbase');
        u.methodExists(aht. 'getGasPrice');
        u.methodExists(aht. 'getHashrate');
        u.methodExists(aht. 'getAccounts');
        u.methodExists(aht. 'getBlockNumber');

        u.methodExists(aht. 'getProtocolVersion');

        u.methodExists(aht. 'setProvider');
        u.propertyExists(aht. 'givenProvider');
        u.propertyExists(aht. 'defaultBlock');
        u.propertyExists(aht. 'defaultAccount');

        u.propertyExists(aht. 'net');
        u.methodExists(aht.net, 'getId');
        u.methodExists(aht.net, 'isListening');
        u.methodExists(aht.net, 'getPeerCount');

        u.propertyExists(aht. 'personal');
        u.methodExists(aht.personal, 'sendTransaction');
        u.methodExists(aht.personal, 'newAccount');
        u.methodExists(aht.personal, 'unlockAccount');
    });
});

