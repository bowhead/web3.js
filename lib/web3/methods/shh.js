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
/** @file shh.js
 * @authors:
 *   Fabian Vogelsteller <fabian@bowhead.org>
 *   Marek Kotewicz <marek.ahtcore.io>
 * @date 2017
 */

var method = require('../method');
var Filter = require('../filter');
var watches = require('./watches');

var Shh = function (web3) {
    this._requestManager = web3._requestManager;

    var self = this;

    methods().forEach(function(method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
    });
};

Shh.prototype.newMessageFilter = function (options, callback, filterCreationErrorCallback) {
    return new Filter(options, 'shh', this._requestManager, watches.shh(), null, callback, filterCreationErrorCallback);
};

var methods = function () {

    return [
        new method({
            name: 'version',
            call: 'shh_version',
            params: 0
        }),
        new method({
            name: 'info',
            call: 'shh_info',
            params: 0
        }),
        new method({
            name: 'setMaxMessageSize',
            call: 'shh_setMaxMessageSize',
            params: 1
        }),
        new method({
            name: 'setMinPoW',
            call: 'shh_setMinPoW',
            params: 1
        }),
        new method({
            name: 'markTrustedPeer',
            call: 'shh_markTrustedPeer',
            params: 1
        }),
        new method({
            name: 'newKeyPair',
            call: 'shh_newKeyPair',
            params: 0
        }),
        new method({
            name: 'addPrivateKey',
            call: 'shh_addPrivateKey',
            params: 1
        }),
        new method({
            name: 'deleteKeyPair',
            call: 'shh_deleteKeyPair',
            params: 1
        }),
        new method({
            name: 'hasKeyPair',
            call: 'shh_hasKeyPair',
            params: 1
        }),
        new method({
            name: 'getPublicKey',
            call: 'shh_getPublicKey',
            params: 1
        }),
        new method({
            name: 'getPrivateKey',
            call: 'shh_getPrivateKey',
            params: 1
        }),
        new method({
            name: 'newSymKey',
            call: 'shh_newSymKey',
            params: 0
        }),
        new method({
            name: 'addSymKey',
            call: 'shh_addSymKey',
            params: 1
        }),
        new method({
            name: 'generateSymKeyFromPassword',
            call: 'shh_generateSymKeyFromPassword',
            params: 1
        }),
        new method({
            name: 'hasSymKey',
            call: 'shh_hasSymKey',
            params: 1
        }),
        new method({
            name: 'getSymKey',
            call: 'shh_getSymKey',
            params: 1
        }),
        new method({
            name: 'deleteSymKey',
            call: 'shh_deleteSymKey',
            params: 1
        }),

        // subscribe and unsubscribe missing

        new method({
            name: 'post',
            call: 'shh_post',
            params: 1,
            inputFormatter: [null]
        })
    ];
};

module.exports = Shh;

