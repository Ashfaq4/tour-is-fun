var gulp        = require('gulp');
    watch       = require('gulp-watch'),
    browsersync = require('browser-sync').create();
    
gulp.task('watch', function () {
  //Automatic Browser Refreshing
  browsersync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  //Watching changing in html file
  watch('./app/index.html', function () {
    browsersync.reload();
  });

  //Watching changing in sytle folder
  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('cssInject');
  });


  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });

});

gulp.task('cssInject', ['styles'], function () {
  return gulp.src('./app/temp/styles/style.css')
    .pipe(browsersync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browsersync.reload();
});