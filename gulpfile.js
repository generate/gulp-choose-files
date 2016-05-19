'use strict';

var gulp = require('gulp');
var choose = require('./');

gulp.task('default', function() {
  return gulp.src('fixtures/*.txt')
    .pipe(choose())
    .pipe(gulp.dest('actual'));
});
