'use strict';

var CalculatorPage = require('./calculator.po.js'),
  page = new CalculatorPage();

describe('Addition', function() {

  var inputs = [4, 5],
    result = (inputs[0] + inputs[1]).toString();

  beforeEach(function() {
    page.get();
  });

  it('should add numbers', function() {
    page.add(inputs[0], inputs[1]);

    page.result.getText().then(function(text) {
      expect(text).toEqual(result);
    });
  });

});