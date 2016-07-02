var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: 'app/'
    });
});

gulp.task('default', ['serve'], function() {
    gulp.watch('app/**/*.html').on('change', browserSync.reload);
    gulp.watch('app/scripts/**/*.js').on('change', browserSync.reload);
});
