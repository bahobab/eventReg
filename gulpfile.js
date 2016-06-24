//gulp file
'use strict';

var gulp = require('gulp');
//var sass = require('gulp-sass');
//var autoprefixer = require('gulp-autoprefixer');
//var watch = require('gulp-watch');
//var eslint = require('gulp-eslint');
// var jasmine = require('gulp-jasmine-phantom');
var browserSync = require('browser-sync').create();
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var babel = require('gulp-babel');
//var sourcemaps = require('gulp-sourcemaps');


///////// sub-task to kick off browserSync in dev /////////////
gulp.task('bs', function () {
	browserSync.init({
		server: './'
	});
	browserSync.stream();
});