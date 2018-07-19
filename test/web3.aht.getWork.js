var chai = require('chai');
var web3 = require('../index');
var testmethod = require('./helpers/test.method.js');

var method = 'getWork';

var tests = [{
    args: [],
    formattedArgs: [],
    result: true,
    formattedResult: true,
    call: 'aht_'+ method
}];

testmethod.runTests('aht', method, tests);

