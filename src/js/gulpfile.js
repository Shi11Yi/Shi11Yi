const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sa='1'


const compileSass = function (done) {
    gulp.src('./css/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./dist'))
    done();
}
exports.compileSass=compileSass

exports.default = function () {
    gulp.watch('./css/*.scss', compileSass)
}