'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-pageboy:spec', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/spec'))
      .withPrompts({someAnswer: true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'dummyfile.txt'
    ]);
  });
});
