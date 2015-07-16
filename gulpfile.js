var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var babelify = require('babelify');



gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});


gulp.task('browserify', function() {

    return browserify('./js/app.js').transform(babelify).bundle()
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

gulp.task('default', ['browserify','webserver', 'watch']);
