'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the unreal ' + chalk.red('generator-pageboy') + ' generator!'
    ));

    done();
  },

  writing: function() {

    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationRoot()
    );

    this.fs.copy(
      this.templatePath('**/.*'),
      this.destinationRoot()
    );

  },

  install: function() {
    this.installDependencies({
      bower: false,
      npm: true,
      callback: function() {
        console.log('Everything is ready!');
      }
    });
  }
});