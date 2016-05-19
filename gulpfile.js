'use strict';

var gulp = require('gulp');

gulp.task('default', function() {
  return gulp.src('*.js')
    .pipe(gulp.dest('*.js'));
});
