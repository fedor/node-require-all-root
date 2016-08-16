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
const reqall = require('require-all-root')
const lib = reqall('/lib')
```

## Usage from global scope

To avoid `require('require-all-root')` in multiple files, you can setup it ones in `global` object
```js
// start.js
global.reqall = require('require-all-root')
 
// lib/foo/bar.js 
const lib = reqall('/lib')
```

## Thanks
- **Felix Geisendörfer** for [require-all](https://github.com/felixge/node-require-all)
- **Chris Morrell** for [app-root-path](https://github.com/inxilpro/node-app-root-path)