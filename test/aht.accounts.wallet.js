var Accounts = require("./../packages/web3-aht-accounts");
var chai = require('chai');
var assert = chai.assert;
var Web3 = require('../packages/web3');
var web3 = new Web3();

var tests = [
    {
        address: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
        privateKey: '0xbe6383dad004f233317e46ddb46ad31b16064d14447a95cc1d8c8d4bc61c3728',
        data: 'Some data',
        // signature done with personal_sign
        signature: '0xa8037a6116c176a25e6fc224947fde9e79a2deaa0dd8b67b366fbdfdbffc01f953e41351267b20d4a89ebfe9c8f03c04de9b345add4a52f15bd026b63c8fb1501b'
    }, {
        address: '0xEB014f8c8B418Db6b45774c326A0E64C78914dC0',
        privateKey: '0xbe6383dad004f233317e46ddb46ad31b16064d14447a95cc1d8c8d4bc61c3728',
        data: 'Some data!%$$%&@*',
        // signature done with personal_sign
        signature: '0x05252412b097c5d080c994d1ea12abcee6f1cae23feb225517a0b691a66e12866b3f54292f9cfef98f390670b4d010fc4af7fcd46e41d72870602c117b14921c1c'
    }
];


describe("aht", function () {
    describe("accounts.wallet", function () {

        tests.forEach(function (test, i) {
            it("creates the right number of wallets", function() {
                var ahtAccounts = new Accounts();

                assert.equal(ahtAccounts.wallet.length, 0);

                var wallet = ahtAccounts.wallet.create(2, '542342f!@#$$');

                assert.equal(ahtAccounts.wallet.length, 2);
                assert.equal(wallet.length, 2);

                wallet = ahtAccounts.wallet.create(3);

                assert.equal(ahtAccounts.wallet.length, 5);
                assert.equal(wallet.length, 5);

                assert.isTrue(web3.utils.isAddress(wallet[1].address));
                assert.isTrue(web3.utils.isAddress(ahtAccounts.wallet[2].address));
            });

            it("add wallet using a privatekey", function() {
                var ahtAccounts = new Accounts();
                assert.equal(ahtAccounts.wallet.length, 0);

                var wallet = ahtAccounts.wallet.add(test.privateKey);
                assert.equal(wallet.address, test.address);
                assert.equal(wallet.privateKey, test.privateKey);
                assert.isFunction(wallet.signTransaction);
                assert.isFunction(wallet.sign);
                assert.equal(wallet.index, 0);

                // test if its retrievabe via address and index
                assert.equal(ahtAccounts.wallet[test.address].address, test.address);
                assert.equal(ahtAccounts.wallet[test.address.toLowerCase()].address, test.address);
                assert.equal(ahtAccounts.wallet[0].address, test.address);

                assert.equal(ahtAccounts.wallet.length, 1);
            });

            it("add wallet using an account", function() {
                var ahtAccounts = new Accounts();
                assert.equal(ahtAccounts.wallet.length, 0);

                var wallet = ahtAccounts.wallet.add({
                    address: test.address,
                    privateKey: test.privateKey
                });
                assert.equal(wallet.address, test.address);
                assert.equal(wallet.privateKey, test.privateKey);
                assert.isFunction(wallet.signTransaction);
                assert.isFunction(wallet.sign);
                assert.equal(wallet.index, 0);

                // test if its retrievabe via address and index
                assert.equal(ahtAccounts.wallet[test.address].address, test.address);
                assert.equal(ahtAccounts.wallet[test.address.toLowerCase()].address, test.address);
                assert.equal(ahtAccounts.wallet[0].address, test.address);

                assert.equal(ahtAccounts.wallet.length, 1);
            });

            it("add wallet double shouldn't work", function() {
                var ahtAccounts = new Accounts();
                assert.equal(ahtAccounts.wallet.length, 0);

                var wallet = ahtAccounts.wallet.add({
                    address: test.address,
                    privateKey: test.privateKey
                });
                wallet = ahtAccounts.wallet.add({
                    address: test.address,
                    privateKey: test.privateKey
                });
                wallet = ahtAccounts.wallet.add(test.privateKey);

                assert.equal(wallet.address, test.address);
                assert.equal(wallet.privateKey, test.privateKey);
                assert.isFunction(wallet.signTransaction);
                assert.isFunction(wallet.sign);
                assert.equal(wallet.index, 0);

                // test if its retrievabe via address and index
                assert.equal(ahtAccounts.wallet[test.address].address, test.address);
                assert.equal(ahtAccounts.wallet[test.address.toLowerCase()].address, test.address);
                assert.equal(ahtAccounts.wallet[0].address, test.address);

                assert.equal(ahtAccounts.wallet.length, 1);
            });

            it("remove wallet using an index", function() {
                var ahtAccounts = new Accounts();
                assert.equal(ahtAccounts.wallet.length, 0);

                var wallet = ahtAccounts.wallet.add(test.privateKey);
                assert.equal(ahtAccounts.wallet.length, 1);

                ahtAccounts.wallet.remove(0);

                assert.isUndefined(ahtAccounts.wallet[0]);
                assert.isUndefined(ahtAccounts.wallet[wallet.address]);
                assert.isUndefined(ahtAccounts.wallet[wallet.address.toLowerCase()]);

                assert.equal(ahtAccounts.wallet.length, 0);

            });

            it("remove wallet using an address", function() {
                var ahtAccounts = new Accounts();
                assert.equal(ahtAccounts.wallet.length, 0);

                var wallet = ahtAccounts.wallet.add(test.privateKey);
                assert.equal(ahtAccounts.wallet.length, 1);

                ahtAccounts.wallet.remove(test.address);

                assert.isUndefined(ahtAccounts.wallet[0]);
                assert.isUndefined(ahtAccounts.wallet[wallet.address]);
                assert.isUndefined(ahtAccounts.wallet[wallet.address.toLowerCase()]);

                assert.equal(ahtAccounts.wallet.length, 0);

            });

            it("remove wallet using an lowercase address", function() {
                var ahtAccounts = new Accounts();
                assert.equal(ahtAccounts.wallet.length, 0);

                var wallet = ahtAccounts.wallet.add(test.privateKey);
                assert.equal(ahtAccounts.wallet.length, 1);

                ahtAccounts.wallet.remove(test.address.toLowerCase());

                assert.isUndefined(ahtAccounts.wallet[0]);
                assert.isUndefined(ahtAccounts.wallet[wallet.address]);
                assert.isUndefined(ahtAccounts.wallet[wallet.address.toLowerCase()]);

                assert.equal(ahtAccounts.wallet.length, 0);

            });

            it("create 5 wallets, remove two, create two more and check for overwrites", function() {
                var count = 5;
                var ahtAccounts = new Accounts();
                assert.equal(ahtAccounts.wallet.length, 0);

                var wallet = ahtAccounts.wallet.create(count);
                var initialAddresses = [0,1,2,3,4].map(function(n) { return wallet[n].address } );
                assert.equal(ahtAccounts.wallet.length, count);

                var thirdAddress = ahtAccounts.wallet[2].address;
                var lastAddress = ahtAccounts.wallet[4].address;
                var remainingAddresses = [0,1,3];
                var beforeRemoval = remainingAddresses.map(function(n) { return wallet[n].address } );

                ahtAccounts.wallet.remove(2);
                ahtAccounts.wallet.remove(4);

                assert.isUndefined(ahtAccounts.wallet[2]);
                assert.isUndefined(ahtAccounts.wallet[thirdAddress]);
                assert.isUndefined(ahtAccounts.wallet[thirdAddress.toLowerCase()]);
                assert.isUndefined(ahtAccounts.wallet[4]);
                assert.isUndefined(ahtAccounts.wallet[lastAddress]);
                assert.isUndefined(ahtAccounts.wallet[lastAddress.toLowerCase()]);

                var afterRemoval = remainingAddresses.map(function(n) { return wallet[n].address } );

                assert.equal(ahtAccounts.wallet._findSafeIndex(), 2);
                assert.equal(ahtAccounts.wallet.length, 3);

                ahtAccounts.wallet.create(2);
                assert.isTrue(web3.utils.isAddress(wallet[2].address));
                assert.isTrue(web3.utils.isAddress(wallet[4].address));
                assert.isUndefined(ahtAccounts.wallet[5]);

                var afterMoreCreation = remainingAddresses.map(function(n) { return wallet[n].address } );
                var newAddresses = [0,1,2,3,4].map(function(n) { return wallet[n].address } );

                // Checks for account overwrites
                assert.sameOrderedMembers(beforeRemoval, afterMoreCreation, "same ordered members");
                assert.sameOrderedMembers(afterRemoval, afterMoreCreation, "same ordered members");
                assert.notSameMembers(initialAddresses, newAddresses, "not same members");

                assert.equal(ahtAccounts.wallet.length, count);
            });

            it("clear wallet", function() {
                var count = 10;
                var ahtAccounts = new Accounts();
                assert.equal(ahtAccounts.wallet.length, 0);

                var wallet = ahtAccounts.wallet.create(count);
                assert.equal(ahtAccounts.wallet.length, count);

                var addresses = [];
                for (var i = 0; i < count; i++) {
                    addresses.push(wallet[i].address);
                }

                ahtAccounts.wallet.clear();

                for (var i = 0; i < count; i++) {
                    assert.isUndefined(ahtAccounts.wallet[i]);
                    assert.isUndefined(ahtAccounts.wallet[addresses[i]]);
                    assert.isUndefined(ahtAccounts.wallet[addresses[i].toLowerCase()]);
                }

                assert.equal(ahtAccounts.wallet.length, 0);
            });

            it("remove accounts then clear wallet", function() {
                var count = 10;
                var ahtAccounts = new Accounts();
                assert.equal(ahtAccounts.wallet.length, 0);

                var wallet = ahtAccounts.wallet.create(count);
                assert.equal(ahtAccounts.wallet.length, count);

                var addresses = [];
                for (var i = 0; i < count; i++) {
                    addresses.push(wallet[i].address);
                }

                ahtAccounts.wallet.remove(0);
                assert.isUndefined(ahtAccounts.wallet[0])
                ahtAccounts.wallet.remove(5);
                assert.isUndefined(ahtAccounts.wallet[5])

                ahtAccounts.wallet.clear();

                for (var i = 0; i < count; i++) {
                    assert.isUndefined(ahtAccounts.wallet[i]);
                    assert.isUndefined(ahtAccounts.wallet[addresses[i]]);
                    assert.isUndefined(ahtAccounts.wallet[addresses[i].toLowerCase()]);
                }



                assert.equal(ahtAccounts.wallet.length, 0);
            });

            it("encrypt then decrypt wallet", function() {
                var ahtAccounts = new Accounts();
                var password = "qwerty";

                assert.equal(ahtAccounts.wallet.length, 0);

                var wallet = ahtAccounts.wallet.create(5);
                var addressFromWallet = ahtAccounts.wallet[0].address;
                assert.equal(ahtAccounts.wallet.length, 5);

                ahtAccounts.wallet.remove(2);
                assert.equal(ahtAccounts.wallet.length, 4);

                var keystore = ahtAccounts.wallet.encrypt(password);
                assert.equal(keystore.length, 4);

                ahtAccounts.wallet.clear();
                assert.equal(ahtAccounts.wallet.length, 0);

                ahtAccounts.wallet.decrypt(keystore, password);
                assert.equal(ahtAccounts.wallet.length, 4);

                var addressFromKeystore = ahtAccounts.wallet[0].address;
                assert.equal(addressFromKeystore, addressFromWallet);

            });
        });
    });
});
