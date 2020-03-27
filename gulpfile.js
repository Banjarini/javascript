const gulp = require('gulp');
const babel = require('gulp-babel');
// gulp dependencies go here

gulp.task('default', function(done) {
	//gulp tasks go here
	gulp.src("es6/**/*.js")
	.pipe(babel())
	.pipe(gulp.dest("dist"));
	// browser source
	gulp.src("public/es6/**/*.js")
	.pipe(babel())
	.pipe(gulp.dest("public/dist"));
	done();
});
