const gulp = require('gulp');

gulp.task('copyImg',function() {
    return gulp.src('./src/img/**.**')
    .pipe(gulp.dest('./dist/img'))
})