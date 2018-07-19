var testMethod = require('./helpers/test.method.js');

var method = 'isMining';
var call = 'aht_mining';

var tests = [{
    result: true,
    formattedResult: true,
    call: call
}];


testMethod.runTests('aht', method, tests);
