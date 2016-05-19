'use strict';

var choose = require('./');
var assemble = require('assemble');
var app = assemble();

/**
 * Basic
 */

app.task('default', function() {
  return app.src('fixtures/*.*')
    .pipe(choose())
    .pipe(app.dest('actual'));
});

/**
 * Render templates
 */

app.task('render', function() {
  app.engine('hbs', require('engine-handlebars'));
  app.data({title: 'Assemble'});

  return app.src('fixtures/*.*')
    .pipe(choose())
    .pipe(app.renderFile('hbs'))
    .pipe(app.dest('actual'));
});

/**
 * Choose files loaded from a collection (instead of fs)
 */

app.task('pages', function() {
  app.engine('hbs', require('engine-handlebars'));
  app.pages('foo', {content: 'this is a page'});
  app.pages('bar', {content: 'this is a page'});
  app.pages('baz', {content: 'this is a page'});

  app.data({title: 'Assemble'});
  return app.toStream('pages')
    .pipe(choose())
    .pipe(app.renderFile('hbs'))
    .pipe(app.dest('actual'));
});

/**
 * Expose the instance
 */

module.exports = app;
