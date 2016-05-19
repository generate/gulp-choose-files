'use strict';

require('mocha');
var assert = require('assert');
var files = require('./');

describe('gulp-choose-files', function() {
  it('should export a function', function() {
    assert.equal(typeof files, 'function');
  });

  it('should export an object', function() {
    assert(files);
    assert.equal(typeof files, 'object');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      files();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected first argument to be a string');
      assert.equal(err.message, 'expected callback to be a function');
      cb();
    }
  });
});
