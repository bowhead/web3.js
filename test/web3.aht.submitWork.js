var chai = require('chai');
var web3 = require('../index');
var testmethod = require('./helpers/test.method.js');

var method = 'submitWork';

var tests = [
{
    args: ['0x567890abcdef5555', '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef', '0xcdef1234567890abcdef1234567890abcdef0x1234567890abcf1234567890ab'],
    formattedArgs: ['0x567890abcdef5555', '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef', '0xcdef1234567890abcdef1234567890abcdef0x1234567890abcf1234567890ab'],
    result: true,
    formattedResult: true,
    call: 'aht_'+ method
}];

testmethod.runTests('aht', method, tests);
