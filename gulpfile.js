'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var styleLint = require('gulp-stylelint');
var concatCss = require('gulp-concat-css');

gulp.task('conCss', function () {
    return gulp.src('./dist/**/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass', function () {
    return gulp.src('./dist/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/sass'));
});

var csslint = require('gulp-csslint');

gulp.task('css', function() {
    gulp.src('./dist/sass/*.css')
        .pipe(csslint())
        .pipe(csslint.reporter());
});