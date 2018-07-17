var chai = require('chai');
var testmethod = require('./helpers/test.method.js');

var method = 'getString';

var tests = [{
    args: ['myDB', 'myKey'],
    formattedArgs: ['myDB', 'myKey'],
    result: 'myValue',
    formattedResult: 'myValue',
    call: 'db_'+ method
}];

testmethod.runTests('db', method, tests);

