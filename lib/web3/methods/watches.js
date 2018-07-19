/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file watches.js
 * @authors:
 *   Marek Kotewicz <marek.ahtdev.com>
 * @date 2015
 */

var method = require('../method');

/// @returns an array of objects describing web3.aht.filter api methods
var aht = function () {
    var newFilterCall = function (args) {
        var type = args[0];

        switch(type) {
            case 'latest':
                args.shift();
                this.params = 0;
                return 'aht_newBlockFilter';
            case 'pending':
                args.shift();
                this.params = 0;
                return 'aht_newPendingTransactionFilter';
            default:
                return 'aht_newFilter';
        }
    };

    var newFilter = new method({
        name: 'newFilter',
        call: newFilterCall,
        params: 1
    });

    var uninstallFilter = new method({
        name: 'uninstallFilter',
        call: 'aht_uninstallFilter',
        params: 1
    });

    var getLogs = new method({
        name: 'getLogs',
        call: 'aht_getFilterLogs',
        params: 1
    });

    var poll = new method({
        name: 'poll',
        call: 'aht_getFilterChanges',
        params: 1
    });

    return [
        newFilter,
        uninstallFilter,
        getLogs,
        poll
    ];
};

/// @returns an array of objects describing web3.shh.watch api methods
var shh = function () {

    return [
        new method({
            name: 'newFilter',
            call: 'shh_newMessageFilter',
            params: 1
        }),
        new method({
            name: 'uninstallFilter',
            call: 'shh_deleteMessageFilter',
            params: 1
        }),
        new method({
            name: 'getLogs',
            call: 'shh_getFilterMessages',
            params: 1
        }),
        new method({
            name: 'poll',
            call: 'shh_getFilterMessages',
            params: 1
        })
    ];
};

module.exports = {
    aht: aht,
    shh: shh
};

