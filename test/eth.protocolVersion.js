var testMethod = require('./helpers/test.method.js');

var method = 'getProtocolVersion';
var call = 'aht_protocolVersion';

var tests = [{
    result: '12345',
    formattedResult: '12345',
    call: call
}];


testMethod.runTests('aht', method, tests);
