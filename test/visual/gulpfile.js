var gulp      = require('gulp'),
    stylus    = require('gulp-stylus'),
    connect = require('gulp-connect'),
    nib       = require('nib'),
    jeet      = require('jeet'),
    axis      = require('axis'),
    rupture   = require('rupture'),
    maneuver  = require('../../');

gulp.task('styl', function () {
  gulp.src('./test.styl')
    .pipe(stylus({ use: [nib(), jeet(), axis(), rupture(), maneuver()], compress: true }))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});
 
gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('watch', function() {
    gulp.watch('./*.styl', ['styl']);
});

gulp.task('default', ['connect', 'watch']);