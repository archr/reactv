var gulp = require('gulp');
var browserify = require('gulp-browserify');
var react = require('gulp-react');

gulp.task('build', function () {
  gulp.src(['web/app.jsx'])
    .pipe(react())
    .pipe(browserify({
      debug: true,
      transform: [ 'reactify' ]
    }))
    .pipe(gulp.dest('public/js'));
});


gulp.task('dev', function () {
  gulp.watch('./web/**/**', [ 'build' ]);
});