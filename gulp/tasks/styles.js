var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require("autoprefixer"),
simple = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssimport = require("postcss-import"),
mixins = require("postcss-mixins");


gulp.task('styletask', function() {
    return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssimport, mixins, simple, nested, autoprefixer]))
    .on('error', function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles/'))
});