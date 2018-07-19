var FakeIpcProvider = require('./helpers/FakeIpcProvider');
var FakeHttpProvider = require('./helpers/FakeHttpProvider');

// // set the ahteeumProvider
// var provider1 = new FakeHttpProvider();
// var provider2 = new FakeIpcProvider();
// provider1.bzz = 'http://givenProvider:8500';
// provider2.bzz = 'http://swarm-gateways.net';
//
// if (typeof window !== 'undefined') {
//     global.bowheadProvider = provider1;
// }
// if (typeof window !== 'undefined') {
//     window.bowheadProvider = provider1;
// }


var chai = require('chai');
var assert = chai.assert;
var Web3 = require('../packages/web3');
var Aht = require('../packages/web3-aht');
var Shh = require('../packages/web3-shh');
var Personal = require('../packages/web3-aht-personal');
var Accounts = require('../packages/web3-aht-accounts');
var Contract = require('../packages/web3-aht-contract');
var Net = require('../packages/web3-net');
var Bzz = require('../packages/web3-bzz');


var tests = [{
    Lib: Web3
},{
    Lib: Aht
},{
    Lib: Shh
},{
    Lib: Personal
},{
    Lib: Net
},{
    Lib: Accounts
},{
    Lib: Bzz,
    swarm: true
}];



describe('lib/web3/setProvider', function () {
    it('Web3 submodules should set the provider using constructor', function () {

        var provider1 = new FakeHttpProvider();
        var provider2 = new FakeIpcProvider();
        provider1.bzz = 'http://localhost:8500';
        provider2.bzz = 'http://swarm-gateways.net';

        var provider3 = new FakeHttpProvider();
        provider3.bzz = 'http://localhost2:8500';

        var lib = new Web3(provider1);
        var lib2 = new Web3(provider3);

        assert.equal(lib.aht.currentProvider.constructor.name, provider1.constructor.name);
        assert.equal(lib.aht.net.currentProvider.constructor.name, provider1.constructor.name);
        assert.equal(lib.aht.personal.currentProvider.constructor.name, provider1.constructor.name);
        assert.equal(lib.aht.Contract.currentProvider.constructor.name, provider1.constructor.name);
        assert.equal(lib.aht.accounts.currentProvider.constructor.name, provider1.constructor.name);
        assert.equal(lib.shh.currentProvider.constructor.name, provider1.constructor.name);
        assert.equal(lib.bzz.currentProvider, provider1.bzz);

        assert.equal(lib.aht._requestManager.provider.constructor.name, provider1.constructor.name);
        assert.equal(lib.aht.net._requestManager.provider.constructor.name, provider1.constructor.name);
        assert.equal(lib.aht.personal._requestManager.provider.constructor.name, provider1.constructor.name);
        assert.equal(lib.aht.Contract._requestManager.provider.constructor.name, provider1.constructor.name);
        assert.equal(lib.aht.accounts._requestManager.provider.constructor.name, provider1.constructor.name);
        assert.equal(lib.shh._requestManager.provider.constructor.name, provider1.constructor.name);

        assert.equal(lib2.aht.currentProvider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.aht.net.currentProvider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.aht.personal.currentProvider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.aht.Contract.currentProvider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.aht.accounts.currentProvider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.shh.currentProvider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.bzz.currentProvider, provider3.bzz);

        assert.equal(lib2.aht._requestManager.provider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.aht.net._requestManager.provider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.aht.personal._requestManager.provider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.aht.Contract._requestManager.provider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.aht.accounts._requestManager.provider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.shh._requestManager.provider.constructor.name, provider3.constructor.name);


        lib.setProvider(provider2);

        assert.equal(lib.aht.currentProvider.constructor.name, provider2.constructor.name);
        assert.equal(lib.aht.net.currentProvider.constructor.name, provider2.constructor.name);
        assert.equal(lib.aht.personal.currentProvider.constructor.name, provider2.constructor.name);
        assert.equal(lib.aht.Contract.currentProvider.constructor.name, provider2.constructor.name);
        assert.equal(lib.aht.accounts.currentProvider.constructor.name, provider2.constructor.name);
        assert.equal(lib.shh.currentProvider.constructor.name, provider2.constructor.name);
        assert.equal(lib.bzz.currentProvider, provider2.bzz);

        assert.equal(lib.aht._requestManager.provider.constructor.name, provider2.constructor.name);
        assert.equal(lib.aht.net._requestManager.provider.constructor.name, provider2.constructor.name);
        assert.equal(lib.aht.personal._requestManager.provider.constructor.name, provider2.constructor.name);
        assert.equal(lib.aht.Contract._requestManager.provider.constructor.name, provider2.constructor.name);
        assert.equal(lib.aht.accounts._requestManager.provider.constructor.name, provider2.constructor.name);
        assert.equal(lib.shh._requestManager.provider.constructor.name, provider2.constructor.name);

        assert.equal(lib2.aht.currentProvider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.aht.net.currentProvider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.aht.personal.currentProvider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.aht.Contract.currentProvider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.aht.accounts.currentProvider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.shh.currentProvider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.bzz.currentProvider, provider3.bzz);

        assert.equal(lib2.aht._requestManager.provider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.aht.net._requestManager.provider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.aht.personal._requestManager.provider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.aht.Contract._requestManager.provider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.aht.accounts._requestManager.provider.constructor.name, provider3.constructor.name);
        assert.equal(lib2.shh._requestManager.provider.constructor.name, provider3.constructor.name);


    });

    it('Bzz should set automatically to bowheadProvider', function () {

        var provider1 = new FakeHttpProvider();
        provider1.bzz = 'http://localhost:8500';
        var provider2 = new FakeIpcProvider();
        provider2.bzz = 'http://focalhost:8500';

        // was set in test/1_givenProvider-bowheadProvider.js
        var lib = new Bzz(provider1);

        assert.equal(lib.currentProvider, provider1.bzz);


        lib.setProvider(provider2);

        assert.equal(lib.currentProvider, provider2.bzz);


    });

    tests.forEach(function (test) {
        it(test.Lib.name +' should set the provider using constructor', function () {

            var provider1 = new FakeHttpProvider();
            var lib;


            if(test.swarm) {

                lib = new test.Lib('http://localhost:8500');

                assert.equal(lib.currentProvider, 'http://localhost:8500');

            } else {

                lib = new test.Lib(provider1);

                assert.equal(lib.currentProvider.constructor.name, provider1.constructor.name);
                assert.equal(lib._requestManager.provider.constructor.name, provider1.constructor.name);
            }

        });
        it(test.Lib.name +' should set the provider using setProvider, after empty init', function () {

            var provider1 = new FakeHttpProvider();
            var lib = new test.Lib();



            if(test.swarm) {

                assert.isNull(lib.currentProvider);

                lib.setProvider('http://localhost:8500');

                assert.equal(lib.currentProvider, 'http://localhost:8500');

            } else {

                assert.isNull(lib.currentProvider);
                assert.isNull(lib._requestManager.provider);

                lib.setProvider(provider1);

                assert.equal(lib.currentProvider.constructor.name, provider1.constructor.name);
                assert.equal(lib._requestManager.provider.constructor.name, provider1.constructor.name);
            }

        });
        it(test.Lib.name +' should set the provider using constructor, and change later using setProvider', function () {

            var provider1 = new FakeHttpProvider();
            var provider2 = new FakeIpcProvider();
            var swarmProvider1 = 'http://localhost:8500';
            var swarmProvider2 = 'http://swarm-gateways.net';

            var lib;


            if(test.swarm) {

                lib = new test.Lib(swarmProvider1);

                assert.equal(lib.currentProvider, swarmProvider1);

                lib.setProvider(swarmProvider2);

                assert.equal(lib.currentProvider, swarmProvider2);

                lib.setProvider(swarmProvider1);

                assert.equal(lib.currentProvider, swarmProvider1);

            } else {

                lib = new test.Lib(provider1);

                assert.equal(lib.currentProvider.constructor.name, provider1.constructor.name);
                assert.equal(lib._requestManager.provider.constructor.name, provider1.constructor.name);

                lib.setProvider(provider2);

                assert.equal(lib.currentProvider.constructor.name, provider2.constructor.name);
                assert.equal(lib._requestManager.provider.constructor.name, provider2.constructor.name);

                lib.setProvider(provider1);

                assert.equal(lib.currentProvider.constructor.name, provider1.constructor.name);
                assert.equal(lib._requestManager.provider.constructor.name, provider1.constructor.name);
            }

        });
    });


});

