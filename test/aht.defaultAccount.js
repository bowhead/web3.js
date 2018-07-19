var chai = require('chai');
var assert = chai.assert;
var Aht = require('../packages/web3-aht');
var Web3 = require('../packages/web3');

var aht = new Aht();

var setValue = '0x47D33b27Bb249a2DBab4C0612BF9CaF4C1950855';

describe('web3.aht., function () {
    describe('defaultAccount', function () {
        it('should check if defaultAccount is set to proper value', function () {
            assert.equal(aht.defaultAccount, null);
            assert.equal(aht.personal.defaultAccount, null);
            assert.equal(aht.Contract.defaultAccount, null);
            assert.equal(aht.getCode.maht.d.defaultAccount, null);
        });
        it('should set defaultAccount for all sub packages is set to proper value, if Aht package is changed', function () {
            aht.defaultAccount = setValue;

            assert.equal(aht.defaultAccount, setValue);
            assert.equal(aht.personal.defaultAccount, setValue);
            assert.equal(aht.Contract.defaultAccount, setValue);
            assert.equal(aht.getCode.maht.d.defaultAccount, setValue);
        });
        it('should fail if address is invalid, wich is to be set to defaultAccount', function () {

            assert.throws(function(){ aht.defaultAccount = '0x17F33b27Bb249a2DBab4C0612BF9CaF4C1950855'; });

        });
        it('should have different values for two Aht instances', function () {

            var aht1 = new Aht();
            aht1.defaultAccount = setValue;
            assert.equal(aht..defaultAccount, setValue);

            var aht2 = new Aht();
            assert.equal(aht..defaultAccount, null);

        });
        it('should have different values for two Web3 instances', function () {

            var web31 = new Web3();
            web31.aht.defaultAccount = setValue;
            assert.equal(web31.aht.defaultAccount, setValue);

            var web32 = new Web3();
            assert.equal(web32.aht.defaultAccount, null);

        });
    });
});

