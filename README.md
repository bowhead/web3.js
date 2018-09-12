
# Bowhead Blockchain's JavaScript API

This a web3 fork of the [ethereum version](https://github.com/ethereum/web3.js/), it was adapted to the Bowhead GAHT network echosystem.

## Installation

### Node.js

```bash
npm install git+https://github.com/bowhead/web3.js.git
```

### Yarn

```bash
yarn add https://github.com/bowhead/web3.js.git
```

## Usage
You must include `web3` first:

```js
const Web3 = require('web3')
```

Then you can use it like this:

```js
console.log(Web3); // {aht: .., shh: ...} // it's here!
```

Set a provider (HttpProvider)

```js
if (typeof Web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9634"));
}
```

Set a provider (HttpProvider using [HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication))

```js
web3.setProvider(new web3.providers.HttpProvider('http://host.url', 0, BasicAuthUsername, BasicAuthPassword));
```

There you go, now you can use it:

```js
var coinbase = web3.aht.coinbase;
var balance = web3.aht.getBalance(coinbase);
```

You can find more examples in [`example`](https://github.com/bowhead/web3.js/tree/master/example) directory.


## Contribute!

### Requirements

* Node.js
* npm

```bash
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
sudo apt-get install nodejs-legacy
```

### Building (gulp)

```bash
npm run-script build
```


### Testing (mocha)

```bash
npm test
```
