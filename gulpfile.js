const gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    babel = require('gulp-babel');

gulp.task('serve', () => {
    browserSync.init({
        server: 'app/'
    });
});

gulp.task('es6', () => {
    return gulp.src('app/scripts/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/build'));
});

gulp.task('default', ['serve', 'es6'], () => {
    gulp.watch('app/**/*.html').on('change', browserSync.reload);
    gulp.watch('app/scripts/**/*.js').on('change', browserSync.reload);
    gulp.watch('app/scripts/**/*.js');
});
