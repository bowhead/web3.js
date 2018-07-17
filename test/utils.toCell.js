var chai = require('chai');
var utils = require('../lib/utils/utils');
var assert = chai.assert;

describe('lib/utils/utils', function () {
    describe('toCell', function () {
        it('should return the correct value', function () {
            
            assert.equal(utils.toCell(1, 'cell'),    '1');
            assert.equal(utils.toCell(1, 'kcell'),   '1000');
            assert.equal(utils.toCell(1, 'Kcell'),   '1000');
            assert.equal(utils.toCell(1, 'mcell'),   '1000000');
            assert.equal(utils.toCell(1, 'Mcell'),   '1000000');            
            assert.equal(utils.toCell(1, 'gcell'),   '1000000000');
            assert.equal(utils.toCell(1, 'Gcell'),   '1000000000');
            assert.equal(utils.toCell(1, 'organ'),   '1000000000');
            assert.equal(utils.toCell(1, 'korgan'),  '1000000000000');
            assert.equal(utils.toCell(1, 'Korgan'),  '1000000000000');
            assert.equal(utils.toCell(1, 'morgan'),  '1000000000000000');
            assert.equal(utils.toCell(1, 'Morgan'),  '1000000000000000');
            assert.equal(utils.toCell(1, 'gorgan'),  '1000000000000000000');
            assert.equal(utils.toCell(1, 'Gorgan'),  '1000000000000000000');
            assert.equal(utils.toCell(1, 'aht'),     '1000000000000000000');
            assert.throws(function () {utils.toCell(1, 'cell1');}, Error);
        });
    });
});
