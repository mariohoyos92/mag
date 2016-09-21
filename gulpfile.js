var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
  return gulp.src('app/assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('app/assets/js/*.js'),
        uglify(),
        gulp.dest('public/js')
    ],
    cb
  );


});
