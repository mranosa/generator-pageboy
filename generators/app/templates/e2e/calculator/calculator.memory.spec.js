'use strict';

var CalculatorPage = require('./calculator.po.js'),
  page = new CalculatorPage();

describe('Memory List', function() {

  var inputs = [1, 2, 3, 4],
    results = [(inputs[0] + inputs[1]).toString(), (inputs[2] + inputs[3]).toString()],
    initialMemoryCount = 0,
    expectedMemoryCount = 2;

  beforeEach(function() {
    page.get();
  });

  it('should start out with an empty list', function() {
    page.memoryListValues.then(function(values) {
      expect(values.length).toEqual(initialMemoryCount);
    });
  });

  it('should be filled with past results', function() {
    page.add(inputs[0], inputs[1]);
    page.add(inputs[2], inputs[3]);

    page.memoryListValues.then(function(values) {
      expect(values.length).toEqual(expectedMemoryCount);

      expect(values[0].getText()).toEqual(results[1]);
      expect(values[1].getText()).toEqual(results[0]);
    });
  });

});