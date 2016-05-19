'use strict';

require('mocha');
var assert = require('assert');
var choose = require('./');

describe('gulp-choose-files', function() {
  it('should export a function', function() {
    assert.equal(typeof choose, 'function');
  });

  it('should export an object', function() {
    assert(choose);
    assert.equal(typeof choose, 'object');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      choose();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected first argument to be a string');
      assert.equal(err.message, 'expected callback to be a function');
      cb();
    }
  });
});
