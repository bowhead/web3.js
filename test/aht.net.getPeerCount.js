var testMethod = require('./helpers/test.method.js');

var method = 'getPeerCount';


var tests = [{
    result: '0xf',
    formattedResult: 15,
    call: 'net_peerCount'
}];

testMethod.runTests(['aht','net'], method, tests);
