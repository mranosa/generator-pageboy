'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.Base.extend({

  constructor: function() {
    yeoman.Base.apply(this, arguments);

    this.argument('name', {
      type: String,
      required: true
    });
  },

  prompting: function() {
    var done = this.async(),
      name = this.name;

    var prompts = [{
      name: 'dir',
      message: 'Where would you like to create this pageobject?',
      default: '/e2e/' + this.name
    }];

    this.prompt(prompts, function(props) {
      this.props = props;

      done();
    }.bind(this));
  },

  writing: function() {
    var pageName = this.props.dir.split('/').pop(),
      pageClassName = _.capitalize(_.camelCase(this.name)) + 'Page',
      specName = this.props.spec;

    this.fs.copyTpl(
      this.templatePath('poTemplate.js'),
      this.destinationRoot() + this.props.dir + '/' + pageName + '.po.js', {
        pageClassName: pageClassName
      }
    );
  },

  install: function() {
    // Do Nothing
  }
});