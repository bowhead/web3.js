var assert = require('assert');
var utils = require('../lib/utils/utils.js');

describe('lib/utils/utils', function () {
    describe('fromCell', function () {
        it('should return the correct value', function () {
            
            assert.equal(utils.fromCell(1000000000000000000, 'cell'),    '1000000000000000000');
            assert.equal(utils.fromCell(1000000000000000000, 'kcell'),   '1000000000000000');
            assert.equal(utils.fromCell(1000000000000000000, 'mcell'),   '1000000000000');
            assert.equal(utils.fromCell(1000000000000000000, 'gcell'),   '1000000000');
            assert.equal(utils.fromCell(1000000000000000000, 'szabo'),  '1000000');
            assert.equal(utils.fromCell(1000000000000000000, 'finney'), '1000');
            assert.equal(utils.fromCell(1000000000000000000, 'ether'),  '1');
            assert.equal(utils.fromCell(1000000000000000000, 'kether'), '0.001');
            assert.equal(utils.fromCell(1000000000000000000, 'grand'),  '0.001');
            assert.equal(utils.fromCell(1000000000000000000, 'mether'), '0.000001');
            assert.equal(utils.fromCell(1000000000000000000, 'gether'), '0.000000001');
            assert.equal(utils.fromCell(1000000000000000000, 'tether'), '0.000000000001');
        });
    });
});
