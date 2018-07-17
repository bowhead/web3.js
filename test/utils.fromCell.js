var assert = require('assert');
var utils = require('../lib/utils/utils.js');

describe('lib/utils/utils', function () {
    describe('fromCell', function () {
        it('should return the correct value', function () {
            
            assert.equal(utils.fromCell(1000000000000000000, 'cell'),    '1000000000000000000');
            assert.equal(utils.fromCell(1000000000000000000, 'kcell'),   '1000000000000000');
            assert.equal(utils.fromCell(1000000000000000000, 'mcell'),   '1000000000000');
            assert.equal(utils.fromCell(1000000000000000000, 'gcell'),   '1000000000');
            assert.equal(utils.fromCell(1000000000000000000, 'organ'),   '1000000000');
            assert.equal(utils.fromCell(1000000000000000000, 'korgan'),  '1000000');
            assert.equal(utils.fromCell(1000000000000000000, 'morgan'),  '1000');
            assert.equal(utils.fromCell(1000000000000000000, 'gorgan'),  '1');
            assert.equal(utils.fromCell(1000000000000000000, 'aht'),     '1');
        });
    });
});
