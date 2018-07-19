var chai = require('chai');
var assert = chai.assert;
var u = require('./helpers/test.utils.js');
var Aht = require('../packages/web3-aht');
var aht = new Aht();

describe('web3.net', function() {
    describe('maht.ds', function() {
        u.maht.dExists(aht.net, 'getId');
        u.maht.dExists(aht.net, 'getNetworkType');
        u.maht.dExists(aht.net, 'isListening');
        u.maht.dExists(aht.net, 'getPeerCount');
    });
});
