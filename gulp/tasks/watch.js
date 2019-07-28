var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(); 

gulp.task('watch', function() {
    browserSync.init({
     server: {
         baseDir: "app"
     }
    });
     watch('./app/index.html', function() {
         browserSync.reload();
     });
     watch('./app/assets/styles/**/*.css', gulp.series('styletask', 'cssInject'));
     watch('./app/assets/scripts/**/*.js', gulp.series('runWebpack', 'reloadBrowser'));
  });

  gulp.task('cssInject', function() {
    return gulp.src('./app/temp/styles/style.css')
    .pipe(browserSync.stream());
 });

 gulp.task('reloadBrowser', function() {
    browserSync.reload();
 });