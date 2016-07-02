var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('serve', () => {
    browserSync.init({
        server: 'app/'
    });
});

gulp.task('default', ['serve'], () => {
    gulp.watch('app/**/*.html').on('change', browserSync.reload);
    gulp.watch('app/scripts/**/*.js').on('change', browserSync.reload);
});
