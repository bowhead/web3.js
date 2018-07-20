var chai = require('chai');
var assert = chai.assert;
var u = require('./helpers/test.utils.js');
var Aht = require('../packages/web3-aht');
var aht = new Aht();

describe('web3.net', function() {
    describe('methods', function() {
        u.methodExists(aht.net, 'getId');
        u.methodExists(aht.net, 'getNetworkType');
        u.methodExists(aht.net, 'isListening');
        u.methodExists(aht.net, 'getPeerCount');
    });
});
