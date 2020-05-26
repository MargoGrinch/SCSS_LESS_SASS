const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('scss:compile', () => gulp
  .src(`${__dirname}/scss/*.scss`)
  .pipe(sass({}).on('error', sass.logError))
  .pipe(gulp.dest('./css/'))
)

gulp.task('scss:watch', () => {
  gulp.watch([
    `${__dirname}/scss/**/*.scss`,
  ], gulp.series(['scss:compile']))
});

gulp.task('default', gulp.parallel(['scss:compile', 'scss:watch']));
