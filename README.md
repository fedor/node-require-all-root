## Usage

Instead of:

```js
const lib = {
	foo: require('../../lib/foo'),
	bar: require('../../lib/bar'),
	...
}
```

use:

```js
const req = require('require-all-root')
const lib = req('/lib')
```

## Usage as a require() replacement

`require-all-root` can import individual files, modules and packages from `/node_modules`.

```js
const req = require('require-all-root')

// exteral modules
const fs = req('fs')
const express = req('express')

// if /module/index.js exists
const module = req('/module')
// equals to
const module = req('/module/index')
const module = req('/module/index.js')

// if /data.json exists
const data = req('/data')
```

## Usage from global scope

To avoid `require('require-all-root')` in multiple files, you can setup it ones in а `global` object
```js
// In start.js
global.req = require('require-all-root')
 
// In /some/path.js 
const lib = req('/lib')
```

## Changelog

**1.0.1**
- Ensure module inner errors are thrown

## Thanks
- **Felix Geisendörfer** for [require-all](https://github.com/felixge/node-require-all)
- **Chris Morrell** for [app-root-path](https://github.com/inxilpro/node-app-root-path)
