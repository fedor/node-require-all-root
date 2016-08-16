var requireAll = require('require-all')
var rootPath = require('app-root-path')
module.exports = function(path) {
	return requireAll(rootPath + path)
}