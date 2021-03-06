var chai = require('chai');
var utils = require('../lib/utils/utils');
var assert = chai.assert;

describe('lib/utils/utils', function () {
    describe('toCell', function () {
        it('should return the correct value', function () {
            
            assert.equal(utils.toCell(1, 'cell'),    '1');
            assert.equal(utils.toCell(1, 'kcell'),   '1000');
            assert.equal(utils.toCell(1, 'Kcell'),   '1000');
            assert.equal(utils.toCell(1, 'babbage'),   '1000');
            assert.equal(utils.toCell(1, 'mcell'),   '1000000');
            assert.equal(utils.toCell(1, 'Mcell'),   '1000000');
            assert.equal(utils.toCell(1, 'lovelace'),   '1000000');
            assert.equal(utils.toCell(1, 'gcell'),   '1000000000');
            assert.equal(utils.toCell(1, 'Gcell'),   '1000000000');
            assert.equal(utils.toCell(1, 'shannon'),   '1000000000');
            assert.equal(utils.toCell(1, 'szabo'),  '1000000000000');
            assert.equal(utils.toCell(1, 'finney'), '1000000000000000');
            assert.equal(utils.toCell(1, 'aht'),  '1000000000000000000');
            assert.equal(utils.toCell(1, 'kaht'), '1000000000000000000000');
            assert.equal(utils.toCell(1, 'grand'),  '1000000000000000000000');
            assert.equal(utils.toCell(1, 'maht'), '1000000000000000000000000');
            assert.equal(utils.toCell(1, 'gaht'), '1000000000000000000000000000');
            assert.equal(utils.toCell(1, 'taht'), '1000000000000000000000000000000');

            assert.equal(utils.toCell(1, 'kcell'),    utils.toCell(1, 'femtoaht'));
            assert.equal(utils.toCell(1, 'szabo'),   utils.toCell(1, 'microaht'));
            assert.equal(utils.toCell(1, 'finney'),  utils.toCell(1, 'milliaht'));
            assert.equal(utils.toCell(1, 'milli'),    utils.toCell(1, 'milliaht'));
            assert.equal(utils.toCell(1, 'milli'),    utils.toCell(1000, 'micro'));

            assert.throws(function () {utils.toCell(1, 'cell1');}, Error);
        });
    });
});
