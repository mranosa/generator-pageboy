exports.config = {
	directConnect: true,

	framework: 'jasmine2',

	suites: {
		calculator: './../e2e/calculator/**/*.spec.js'
	},

	capabilities: {
		'browserName': 'chrome'
	}
};