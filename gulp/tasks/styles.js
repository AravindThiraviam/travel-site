var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require("autoprefixer"),
simple = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssimport = require("postcss-import");


gulp.task('styletask', function() {
    return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssimport, simple, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles/'))
});