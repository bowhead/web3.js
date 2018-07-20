var chai = require('chai');
var assert = chai.assert;
var Aht = require('../packages/web3-aht');

var aht = new Aht();

var setValue = 123;

describe('web3.aht., function () {
    describe('defaultBlock', function () {
        it('should check if defaultBlock is set to proper value', function () {
            assert.equal(aht.defaultBlock, 'latest');
            assert.equal(aht.personal.defaultBlock, 'latest');
            assert.equal(aht.Contract.defaultBlock, 'latest');
            assert.equal(aht.getCode.method.defaultBlock, 'latest');
        });
        it('should set defaultBlock for all sub packages is set to proper value, if Aht package is changed', function () {
            aht.defaultBlock = setValue;

            assert.equal(aht.defaultBlock, setValue);
            assert.equal(aht.personal.defaultBlock, setValue);
            assert.equal(aht.Contract.defaultBlock, setValue);
            assert.equal(aht.getCode.method.defaultBlock, setValue);
        });
    });
});

