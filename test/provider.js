var chai = require('chai');
var assert = chai.assert;
var net = require('net');

var Aht = require('../packages/web3-aht');
var Shh = require('../packages/web3-shh');
var Net = require('../packages/web3-net');
var Web3 = require('../packages/web3');


var tests = [{
    providerParams: ['http://localhost:9634'],
    providerType: 'HttpProvider',
    package: Web3
},{
    providerParams: ['HTTP://localhost:9634'],
    providerType: 'HttpProvider',
    package: Web3
},{
    providerParams: ['ws://localhost:8546'],
    providerType: 'WebsocketProvider',
    package: Web3
},{
    providerParams: ['WS://localhost:8546'],
    providerType: 'WebsocketProvider',
    package: Web3
},{
    providerParams: ['wss://user1:passw0rd@localhost:8546'],
    providerType: 'WebsocketProvider',
    package: Web3
},{
    providerParams: ['/.bowhead/my/path/gaht.ipc', net],
    providerType: 'IpcProvider',
    package: Web3
},{
    providerParams: ['\\\\.\\pipe\\gaht.ipc', net],
    providerType: 'IpcProvider',
    package: Web3
},{
    providerParams: ['://hello.com:1234'],
    package: Web3,
    error: true
},

    {
        providerParams: ['http://localhost:9634'],
        providerType: 'HttpProvider',
        package: Net
    },{
        providerParams: ['HTTP://localhost:9634'],
        providerType: 'HttpProvider',
        package: Net
    },{
        providerParams: ['ws://localhost:8546'],
        providerType: 'WebsocketProvider',
        package: Net
    },{
        providerParams: ['WS://localhost:8546'],
        providerType: 'WebsocketProvider',
        package: Net
    },{
        providerParams: ['/.bowhead/my/path/gaht.ipc', net],
        providerType: 'IpcProvider',
        package: Net
    },{
        providerParams: ['\\\\.\\pipe\\gaht.ipc', net],
        providerType: 'IpcProvider',
        package: Net
    },{
        providerParams: ['://hello.com:1234'],
        package: Net,
        error: true
    },

    {
        providerParams: ['http://localhost:9634'],
        providerType: 'HttpProvider',
        package: Shh
    },{
        providerParams: ['HTTP://localhost:9634'],
        providerType: 'HttpProvider',
        package: Shh
    },{
        providerParams: ['ws://localhost:8546'],
        providerType: 'WebsocketProvider',
        package: Shh
    },{
        providerParams: ['WS://localhost:8546'],
        providerType: 'WebsocketProvider',
        package: Shh
    },{
        providerParams: ['/.bowhead/my/path/gaht.ipc', net],
        providerType: 'IpcProvider',
        package: Shh
    },{
        providerParams: ['\\\\.\\pipe\\gaht.ipc', net],
        providerType: 'IpcProvider',
        package: Shh
    },{
        providerParams: ['://hello.com:1234'],
        package: Shh,
        error: true
    },

    {
        providerParams: ['http://localhost:9634'],
        providerType: 'HttpProvider',
        package: Aht
    },{
        providerParams: ['HTTP://localhost:9634'],
        providerType: 'HttpProvider',
        package: Aht
    },{
        providerParams: ['ws://localhost:8546'],
        providerType: 'WebsocketProvider',
        package: Aht
    },{
        providerParams: ['WS://localhost:8546'],
        providerType: 'WebsocketProvider',
        package: Aht
    },{
        providerParams: ['/.bowhead/my/path/gaht.ipc', net],
        providerType: 'IpcProvider',
        package: Aht
    },{
        providerParams: ['\\\\.\\pipe\\gaht.ipc', net],
        providerType: 'IpcProvider',
        package: Aht
    },{
        providerParams: ['://hello.com:1234'],
        package: Aht,
        error: true
    }];

describe('web3', function () {
    describe('automatic provider selection', function () {
        tests.forEach(function (test, index) {

            if(!test.error) {
                it('initiates on package level', function () {

                    var pkg = new test.package(test.providerParams[0], test.providerParams[1]);
                    assert.equal(pkg.currentProvider.constructor.name, test.providerType);

                });

                it('initiates using setProvider', function () {

                    var pkg = new test.package();
                    assert.equal(pkg.currentProvider, null);

                    pkg.setProvider.apply(pkg, test.providerParams);
                    assert.equal(pkg.currentProvider.constructor.name, test.providerType);

                });

            } else {
                it('can\'t autodetect the provider', function () {

                    assert.throws(function(){ new test.package(test.providerParams[0]); });


                });
                it('can\'t autodetect the provider when using setProvider', function () {

                    var pkg = new test.package();
                    assert.throws(function(){ pkg.setProvider(test.providerParams[0]); });


                });
            }
        });
    });
});

