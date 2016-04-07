'use strict';

var CalculatorPage = function() {

	var me = this;

	this.firstInput = element(by.model('first'));
	this.secondInput = element(by.model('second'));
	this.goButton = element(by.id('gobutton'));
	this.result = element(by.binding('latest'));
	this.memoryListValues = element.all(by.repeater('result in memory').column('result.value'));

	this.get = function() {
		browser.get('http://localhost:3456');
	};

	this.add = function(first, second) {
		me.firstInput.sendKeys(first);
		me.secondInput.sendKeys(second);
		me.goButton.click();

		return me.result;
	};

};

module.exports = CalculatorPage;