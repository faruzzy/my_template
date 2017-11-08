const gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass'),
	rollup = require('rollup');

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

gulp.task('rollup', function() {
	rollup.rollup({
		entry: './app/js/app.js'
	}).then(bundle => {
		bundle.write({
			dest: 'app/build/app.js',
			format: 'iife',
			sourceMap: true
		})
	});
});

gulp.task('default', ['serve', 'sass', 'rollup'], () => {
	gulp.watch('app/**/*.html').on('change', browserSync.reload);
	gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
	gulp.watch('app/js/**/*.js', ['rollup']);
	gulp.watch('app/scss/*.scss', ['sass']);
});
