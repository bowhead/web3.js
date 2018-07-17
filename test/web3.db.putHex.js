var chai = require('chai');
var web3 = require('../index');
var testmethod = require('./helpers/test.method.js');

var method = 'putHex';

var tests = [{
    args: ['myDB', 'myKey', '0xb'],
    formattedArgs: ['myDB', 'myKey', '0xb'],
    result: true,
    formattedResult: true,
    call: 'db_'+ method
}];

testmethod.runTests('db', method, tests);

