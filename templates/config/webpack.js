const path = require('path');

module.exports = {
	webpack: {
		options: {
			context: path.resolve(__dirname, '../webpack/'),
		},
		production: require('../webpack/build/webpack.prod.conf.js'),
		development: require('../webpack/build/webpack.dev.conf.js')
	}
}