var chai = require('chai');
var assert = chai.assert;

global.bowheadProvider = {bzz: 'http://givenProvider:8500'};


describe('Web3.providers.givenProvider', function () {
    describe('should be set if bowheadProvider is available ', function () {

        it('when instantiating Web3', function () {

            var Web3 = require('../packages/web3');

            assert.deepEqual(Web3.givenProvider, global.bowheadProvider);

        });

        it('when instantiating Aht', function () {

            var Aht = require('../packages/web3-aht');

            assert.deepEqual(Aht.givenProvider, global.bowheadProvider);

        });

        it('when instantiating Bzz', function () {

            var Bzz = require('../packages/web3-bzz');

            assert.deepEqual(Bzz.givenProvider, global.bowheadProvider.bzz);

        });

    });
});

