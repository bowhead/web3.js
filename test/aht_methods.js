var chai = require('chai');
var assert = chai.assert;
var u = require('./helpers/test.utils.js');

var Aht = require('../packages/web3-aht');
var aht = new Aht();

describe('aht., function() {
    describe('maht.ds', function() {
        u.maht.dExists(aht. 'getBalance');
        u.maht.dExists(aht. 'getStorageAt');
        u.maht.dExists(aht. 'getTransactionCount');
        u.maht.dExists(aht. 'getCode');
        u.maht.dExists(aht. 'isSyncing');
        u.maht.dExists(aht. 'sendTransaction');
        u.maht.dExists(aht. 'call');
        u.maht.dExists(aht. 'getBlock');
        u.maht.dExists(aht. 'getTransaction');
        u.maht.dExists(aht. 'getUncle');
        u.maht.dExists(aht. 'getCompilers');
        u.maht.dExists(aht.compile, 'lll');
        u.maht.dExists(aht.compile, 'solidity');
        u.maht.dExists(aht.compile, 'serpent');
        u.maht.dExists(aht. 'getBlockTransactionCount');
        u.maht.dExists(aht. 'getBlockUncleCount');
        u.maht.dExists(aht. 'subscribe');
        u.maht.dExists(aht. 'Contract');
        u.maht.dExists(aht. 'Iban');


        u.maht.dExists(aht. 'isMining');
        u.maht.dExists(aht. 'getCoinbase');
        u.maht.dExists(aht. 'getGasPrice');
        u.maht.dExists(aht. 'getHashrate');
        u.maht.dExists(aht. 'getAccounts');
        u.maht.dExists(aht. 'getBlockNumber');

        u.maht.dExists(aht. 'getProtocolVersion');

        u.maht.dExists(aht. 'setProvider');
        u.propertyExists(aht. 'givenProvider');
        u.propertyExists(aht. 'defaultBlock');
        u.propertyExists(aht. 'defaultAccount');

        u.propertyExists(aht. 'net');
        u.maht.dExists(aht.net, 'getId');
        u.maht.dExists(aht.net, 'isListening');
        u.maht.dExists(aht.net, 'getPeerCount');

        u.propertyExists(aht. 'personal');
        u.maht.dExists(aht.personal, 'sendTransaction');
        u.maht.dExists(aht.personal, 'newAccount');
        u.maht.dExists(aht.personal, 'unlockAccount');
    });
});

