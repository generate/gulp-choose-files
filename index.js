'use strict';

var through = require('through2');
var extend = require('extend-shallow');
var Questions = require('question-cache');

module.exports = function(options) {
  var opts = extend({prop: 'relative'}, options);
  var questions = new Questions();
  var paths = [];
  var files = {};

  return through.obj(function(file, enc, next) {
    var key = fileKey(file, opts);
    paths.push(key);
    files[key] = file;
    next();
  }, function(next) {
    var stream = this;
    questions.choices('files', 'Which files do you want to write?', paths);
    questions.ask('files', function(err, answers) {
      if (err || !answers.files) {
        next(err);
        return;
      }
      answers.files.forEach(function(filepath) {
        stream.push(files[filepath]);
      });
      next();
    });
  });
};

function fileKey(file, opts) {
  if (typeof opts.key === 'string') {
    return file[opts.key];
  }
  if (typeof opts.key === 'function') {
    return opts.key(file);
  }
  return file.relative;
}
