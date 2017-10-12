const gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass');

gulp.task('sass', () => {
	return gulp.src('app/scss/*.scss')
		.pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
		.pipe(gulp.dest('app/css/'))
		.pipe(browserSync.stream());
});

gulp.task('serve', () => {
	browserSync.init({
		watchOptions: {
			ignoreInitial: true
		},
		files: ['app/'],
		server: 'app/'
	});
});

gulp.task('default', ['serve', 'sass'], () => {
	gulp.watch('app/**/*.html').on('change', browserSync.reload);
	gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
	gulp.watch('app/scss/*.scss', ['sass']);
});
