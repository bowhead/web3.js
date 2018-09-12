**PREVIEW RELEASE** This is a beta preview release with breaking changes! The current stable version is 0.20.0

# web3.js - Bowhead JavaScript API

You need to run a local or remote GAHT node to use this library.


## Installation

### Node

```bash
npm install git+https://github.com/bowhead/web3.js.git
```

### Yarn

```bash
yarn add https://github.com/bowhead/web3.js.git
```

### In the Browser

Use the prebuild ``dist/web3.min.js``, or
build using the [web3.js][repo] repository:

```bash
npm run-script build
```

Then include `dist/web3.js` in your html file.
This will expose `Web3` on the window object.

## Usage

```js
// in node.js
var Web3 = require('web3');

var web3 = new Web3('ws://localhost:9634');
console.log(web3);
> {
    aht: ... ,
    shh: ... ,
    utils: ...,
    ...
}
```

Additionally you can set a provider using `web3.setProvider()` (e.g. WebsocketProvider)

```js
web3.setProvider('ws://localhost:9634');
// or
web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:9634'));
```

There you go, now you can use it:

```js
web3.aht.getAccounts()
.then(console.log);
```

## Building

### Requirements

* [Node.js](https://nodejs.org)
* npm

```bash
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

### Building (gulp)

Build only the web3.js package

```bash
npm run-script build
```

Or build all sub packages as well

```bash
npm run-script build-all
```

This will put all the browser build files into the `dist` folder.


### Testing (mocha)

```bash
npm test
```
