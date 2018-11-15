'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var mozjpeg = require('imagemin-mozjpeg');
var pngquant = require('imagemin-pngquant');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];


// Gulp task to minify CSS files
gulp.task('styles', function () {
    return gulp.src('./css/**/*.css')
        // Auto-prefix css styles for cross browser compatibility
        .pipe(autoprefixer({
            browsers: AUTOPREFIXER_BROWSERS
        }))
        // Minify the file
        .pipe(csso())
        // Output
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('images', () =>
    gulp.src('images/*')
    .pipe(imagemin([
        pngquant({
            quality: '50'
        }),
        mozjpeg({
            quality: '50'
        })
    ]))
    .pipe(gulp.dest('dist/images'))
);

// Gulp task to minify JavaScript files
gulp.task('scripts', function () {
    return gulp.src('./js/**/*.js')
        // Minify the file
        .pipe(uglify())
        // Output
        .pipe(gulp.dest('./dist/js'))
});

// Clean output directory
gulp.task('clean', () => del(['dist']));

// Gulp task to minify all files
gulp.task('default', ['clean'], function () {
    runSequence(
        'styles',
        'scripts',
        'images'
    );
});