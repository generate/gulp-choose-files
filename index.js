/*!
 * gulp-choose-files (https://github.com/jonschlinkert/gulp-choose-files)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var debug = require('debug')('gulp-choose-files');

module.exports = function(config) {
  return function(app) {
    if (this.isRegistered('gulp-choose-files')) return;
    debug('initializing "%s", from "%s"', __filename, module.parent.id);

    this.define('files', function() {
      debug('running files');
      
    });
  };
};
