var browserify = require('browserify');
var source = require('vinyl-source-stream');

var gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch');


gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('browserify', function() {
    return browserify('./src/javascript/app.js').bundle()
        // vinyl-source-stream makes the bundle compatible with gulp
        .pipe(source('bundle.js')) // Desired filename
        // Output the file
        .pipe(gulp.dest('./build/'));
});

gulp.task('browserify', function() {
    return browserify('./js/app.js').bundle()
        // vinyl-source-stream makes the bundle compatible with gulp
        .pipe(source('bundle.js')) // Desired filename
        // Output the file
        .pipe(gulp.dest('./'));
});

gulp.task('reload', function() {
  gulp.src('*.html')
    .pipe(connect.reload());

  console.log('detected change');
})

gulp.task('watch', function() {
  gulp.watch('./*.html', ['browserify','reload']);
  gulp.watch('js/*.js', ['browserify','reload']);
})

gulp.task('default', ['webserver', 'watch']);
