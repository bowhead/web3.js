var chai = require('chai');
var web3 = require('../index');
var testmethod = require('./helpers/test.method.js');

var method = 'getCompilers';


var tests = [{
    args: [],
    formattedArgs: [],
    result: ['solidity'],
    formattedResult: ['solidity'],
    call: .aht_'+ method
},{
    args: [],
    formattedArgs: [],
    result: ['solidity'],
    formattedResult: ['solidity'],
    call: .aht_'+ method
}];

testmethod.runTests(.aht', method, tests);

