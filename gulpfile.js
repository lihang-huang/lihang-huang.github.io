var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

gulp.task('jsmin',function(){
	gulp.src(['js/cal.js','js/common.js','js/search.js'])
		.pipe(uglify())
		// .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('js'));
});

gulp.task('imagemin',function(){
	gulp.src('img/*.{png,jpg,jpeg}')
		.pipe(imagemin())
		.pipe(gulp.dest('img'))
});

gulp.task('default',['jsmin','imagemin']); 