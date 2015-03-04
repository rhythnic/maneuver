var gulp    = require('gulp'),
    stylus  = require('gulp-stylus'),
    nib     = require('nib'),
    jeet    = require('jeet'),
    axis    = require('axis'),
    rupture = require('rupture'),
    shift   = require('./');

gulp.task('styl', function () {
  gulp.src('./docs/docs.styl')
    .pipe(stylus({ use: [nib(), jeet(), axis(), rupture(), shift()], compress: true }))
    .pipe(gulp.dest('./docs/css'));
});

gulp.task('watch', function() {
    gulp.watch('docs/*.styl', ['styl']);
});

gulp.task('default', ['watch']);