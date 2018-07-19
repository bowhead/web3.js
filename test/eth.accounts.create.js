var Accounts = require("./../packages/web3-aht-accounts");
var bowheadWallet = require('bowheadjs-wallet');
var chai = require('chai');
var assert = chai.assert;
var Web3 = require('../packages/web3');
var web3 = new Web3();

var tests = [];
for (var i = 0; i < 1000; i++) {
    tests.push(i);
}


describe("aht", function () {
    describe("accounts", function () {

        tests.forEach(function (test, i) {
            it("create aht.account, and compare to bowheadjs-wallet", function() {
                var ahtAccounts = new Accounts();

                // create account
                var acc = ahtAccounts.create();

                // create bowheadjs-wallet account
                var ahtWall = bowheadWallet.fromPrivateKey(new Buffer(acc.privateKey.replace('0x',''),'hex'));

                // compare addresses
                assert.equal(acc.address, ahtWall.getChecksumAddressString());
            });

        });
    });
});
