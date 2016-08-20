var requireAll = require('require-all')
var rootPath = require('app-root-path')

module.exports = function(path) {
	var fullPath = rootPath + path

	try {
		return require(fullPath)
	} catch (e) {
		if (e.code !== 'MODULE_NOT_FOUND') {
			throw e
		}
		// No fullPath.js, fullPath/index.js or fullPath/index.node
	}

	try {
		return requireAll(fullPath)
	} catch (e) {
		if (e.code !== 'ENOENT') {
			throw e
		}
		// No full path
		return require(path)
	}
}
