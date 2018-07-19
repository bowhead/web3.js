var chai = require('chai');
var utils = require('../packages/web3-utils');

var assert = chai.assert;

describe('lib/utils/utils', function () {
    describe('toCell', function () {
        it('should return the correct value', function () {

            assert.equal(utils.toCell('1', 'wei'),    '1');
            assert.equal(utils.toCell('1', 'kwei'),   '1000');
            assert.equal(utils.toCell('1', 'Kwei'),   '1000');
            assert.equal(utils.toCell('1', 'babbage'),   '1000');
            assert.equal(utils.toCell('1', 'mwei'),   '1000000');
            assert.equal(utils.toCell('1', 'Mwei'),   '1000000');
            assert.equal(utils.toCell('1', 'lovelace'),   '1000000');
            assert.equal(utils.toCell('1', 'gwei'),   '1000000000');
            assert.equal(utils.toCell('1', 'Gwei'),   '1000000000');
            assert.equal(utils.toCell('1', 'shannon'),   '1000000000');
            assert.equal(utils.toCell('1', 'szabo'),  '1000000000000');
            assert.equal(utils.toCell('1', 'finney'), '1000000000000000');
            assert.equal(utils.toCell('1', 'aht'),  '1000000000000000000');
            assert.equal(utils.toCell('1', 'kaht'), '1000000000000000000000');
            assert.equal(utils.toCell('1', 'grand'),  '1000000000000000000000');
            assert.equal(utils.toCell('1', 'maht'), '1000000000000000000000000');
            assert.equal(utils.toCell('1', 'gaht'), '1000000000000000000000000000');
            assert.equal(utils.toCell('1', 'taht'), '1000000000000000000000000000000');

            assert.equal(utils.toCell('1', 'kwei'),    utils.toCell('1', 'femtoaht'));
            assert.equal(utils.toCell('1', 'szabo'),   utils.toCell('1', 'microaht'));
            assert.equal(utils.toCell('1', 'finney'),  utils.toCell('1', 'milliaht'));
            assert.equal(utils.toCell('1', 'milli'),    utils.toCell('1', 'milliaht'));
            assert.equal(utils.toCell('1', 'milli'),    utils.toCell('1000', 'micro'));

            assert.throws(function () {utils.toCell(1, 'wei1');}, Error);
        });
    });
});
