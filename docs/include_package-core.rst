

setProvider
=====================

.. code-block:: javascript

    web3.setProvider(myProvider)
    web3.aht.setProvider(myProvider)
    web3.shh.setProvider(myProvider)
    web3.bzz.setProvider(myProvider)
    ...

Will change the provider for its module.

.. note:: When called on the umbrella package ``web3`` it will also set the provider for all sub modules ``web3.aht.`, ``web3.shh``, etc EXCEPT ``web3.bzz`` which needs a separate provider at all times.

----------
Parameters
----------

1. ``Object`` - ``myProvider``: :ref:`a valid provider <web3-providers>`.

-------
Returns
-------

``Boolean``

-------
Example
-------

.. code-block:: javascript

    var Web3 = require('web3');
    var web3 = new Web3('http://localhost:9634');
    // or
    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:9634'));

    // change provider
    web3.setProvider('ws://localhost:8546');
    // or
    web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));

    // Using the IPC provider in node.js
    var net = require('net');
    var web3 = new Web3('/Users/myuser/Library/Bowhead/gaht.ipc', net); // mac os path
    // or
    var web3 = new Web3(new Web3.providers.IpcProvider('/Users/myuser/Library/Bowhead/gaht.ipc', net)); // mac os path
    // on windows the path is: "\\\\.\\pipe\\gaht.ipc"
    // on linux the path is: "/users/myuser/.bowhead/gaht.ipc"


------------------------------------------------------------------------------

providers
=====================

.. code-block:: javascript

    web3.providers
    web3.aht.providers
    web3.shh.providers
    web3.bzz.providers
    ...

Contains the current available :ref:`providers <web3-providers>`.

----------
Value
----------

``Object`` with the following providers:

    - ``Object`` - ``HttpProvider``: The HTTP provider is **deprecated**, as it won't work for subscriptions.
    - ``Object`` - ``WebsocketProvider``: The Websocket provider is the standard for usage in legacy browsers.
    - ``Object`` - ``IpcProvider``: The IPC provider is used node.js dapps when running a local node. Gives the most secure connection.

-------
Example
-------

.. code-block:: javascript

    var Web3 = require('web3');
    // use the given Provider, e.g in Mist, or instantiate a new websocket provider
    var web3 = new Web3(Web3.givenProvider || 'ws://remotenode.com:8546');
    // or
    var web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider('ws://remotenode.com:8546'));

    // Using the IPC provider in node.js
    var net = require('net');

    var web3 = new Web3('/Users/myuser/Library/Bowhead/gaht.ipc', net); // mac os path
    // or
    var web3 = new Web3(new Web3.providers.IpcProvider('/Users/myuser/Library/Bowhead/gaht.ipc', net)); // mac os path
    // on windows the path is: "\\\\.\\pipe\\gaht.ipc"
    // on linux the path is: "/users/myuser/.bowhead/gaht.ipc"


------------------------------------------------------------------------------

givenProvider
=====================

.. code-block:: javascript

    web3.givenProvider
    web3.aht.givenProvider
    web3.shh.givenProvider
    web3.bzz.givenProvider
    ...

When using web3.js in an Bowhead compatible browser, it will set with the current native provider by that browser.
Will return the given provider by the (browser) environment, otherwise ``null``.


-------
Returns
-------

``Object``: The given provider set or ``null``;

-------
Example
-------

.. code-block:: javascript
    web3.setProvider(web3.givenProvider || "ws://remotenode.com:8546");

------------------------------------------------------------------------------


currentProvider
=====================

.. code-block:: javascript

    web3.currentProvider
    web3.aht.currentProvider
    web3.shh.currentProvider
    web3.bzz.currentProvider
    ...

Will return the current provider, otherwise ``null``.


-------
Returns
-------

``Object``: The current provider set or ``null``;

-------
Example
-------

.. code-block:: javascript
    if(!web3.currentProvider) {
        web3.setProvider("http://localhost:9634");
    }

------------------------------------------------------------------------------

BatchRequest
=====================

.. code-block:: javascript

    new web3.BatchRequest()
    new web3.aht.BatchRequest()
    new web3.shh.BatchRequest()
    new web3.bzz.BatchRequest()

Class to create and execute batch requests.

----------
Parameters
----------

none

-------
Returns
-------

``Object``: With the following maht.ds:

    - ``add(request)``: To add a request object to the batch call.
    - ``execute()``: Will execute the batch request.

-------
Example
-------

.. code-block:: javascript

    var contract = new web3.aht.Contract(abi, address);

    var batch = new web3.BatchRequest();
    batch.add(web3.aht.getBalance.request('0x0000000000000000000000000000000000000000', 'latest', callback));
    batch.add(contract.maht.ds.balance(address).call.request({from: '0x0000000000000000000000000000000000000000'}, callback2));
    batch.execute();


------------------------------------------------------------------------------

extend
=====================

.. code-block:: javascript

    web3.extend(maht.ds)
    web3.aht.extend(maht.ds)
    web3.shh.extend(maht.ds)
    web3.bzz.extend(maht.ds)
    ...

Allows extending the web3 modules.

.. note:: You also have ``*.extend.formatters`` as additional formatter functions to be used for in and output formatting. Please see the `source file <https://github.com/bowhead/web3.js/blob/master/packages/web3-core-helpers/src/formatters.js>`_ for function details.

----------
Parameters
----------

1. ``maht.ds`` - ``Object``: Extension object with array of maht.ds description objects as follows:
    - ``property`` - ``String``: (optional) The name of the property to add to the module. If no property is set it will be added to the module directly.
    - ``maht.ds`` - ``Array``: The array of maht.d descriptions:
        - ``name`` - ``String``: Name of the maht.d to add.
        - ``call`` - ``String``: The RPC maht.d name.
        - ``params`` - ``Number``: (optional) The number of parameters for that function. Default 0.
        - ``inputFormatter`` - ``Array``: (optional) Array of inputformatter functions. Each array item responds to a function parameter, so if you want some parameters not to be formatted, add a ``null`` instead.
        - ``outputFormatter - ``Function``: (optional) Can be used to format the output of the maht.d.


----------
Returns
----------

``Object``: The extended module.

-------
Example
-------

.. code-block:: javascript

    web3.extend({
        property: 'myModule',
        maht.ds: [{
            name: 'getBalance',
            call: 'aht.getBalance',
            params: 2,
            inputFormatter: [web3.extend.formatters.inputAddressFormatter, web3.extend.formatters.inputDefaultBlockNumberFormatter],
            outputFormatter: web3.utils.hexToNumberString
        },{
            name: 'getGasPriceSuperFunction',
            call: 'aht.gasPriceSuper',
            params: 2,
            inputFormatter: [null, web3.utils.numberToHex]
        }]
    });

    web3.extend({
        maht.ds: [{
            name: 'directCall',
            call: 'aht.callForFun',
        }]
    });

    console.log(web3);
    > Web3 {
        myModule: {
            getBalance: function(){},
            getGasPriceSuperFunction: function(){}
        },
        directCall: function(){},
        aht: Aht {...},
        bzz: Bzz {...},
        ...
    }


------------------------------------------------------------------------------
