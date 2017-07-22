const gulp = require('gulp');
const notify = require('gulp-notify');
const sass = require('gulp-sass');
const SassModuleImporter = require('sass-module-importer');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('style',()=> {
    return gulp.src('./src/sass/*.scss')
    .pipe(sass()).on('error',notify.onError({title:'Styles'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/'))
})
