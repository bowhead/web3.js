var assert = require('assert');
var utils = require('../packages/web3-utils');

describe('lib/utils/utils', function () {
    describe('fromCell', function () {
        it('should return the correct value', function () {

            assert.equal(utils.fromCell('1000000000000000000', 'wei'),    '1000000000000000000');
            assert.equal(utils.fromCell('1000000000000000000', 'kwei'),   '1000000000000000');
            assert.equal(utils.fromCell('1000000000000000000', 'mwei'),   '1000000000000');
            assert.equal(utils.fromCell('1000000000000000000', 'gwei'),   '1000000000');
            assert.equal(utils.fromCell('1000000000000000000', 'szabo'),  '1000000');
            assert.equal(utils.fromCell('1000000000000000000', 'finney'), '1000');
            assert.equal(utils.fromCell('1000000000000000000', 'aht'),  '1');
            assert.equal(utils.fromCell('1000000000000000000', 'kaht'), '0.001');
            assert.equal(utils.fromCell('1000000000000000000', 'grand'),  '0.001');
            assert.equal(utils.fromCell('1000000000000000000', 'maht'), '0.000001');
            assert.equal(utils.fromCell('1000000000000000000', 'gaht'), '0.000000001');
            assert.equal(utils.fromCell('1000000000000000000', 'taht'), '0.000000000001');
        });
    });
});
