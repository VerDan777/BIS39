const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });

    watch('./src/**/*.pug', () => {
        gulp.start('pugChanged');
    })

    watch('./src/sass/*.scss', () => {
        gulp.start('cssInject');
    })
});

gulp.task('pugChanged', ['pug'], () => {
    browserSync.reload();
});

gulp.task('cssInject', ['style'], () => {
    gulp.src('./dist/styles.css')
    .pipe(browserSync.stream());
});