const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function refresh () {
    return gulp.src('./css/**/*.css').pipe(browserSync.stream())
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./css/**/*.css', refresh);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.watch = watch;