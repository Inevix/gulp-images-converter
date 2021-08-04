const gulp = require('gulp');
const jimp = require('gulp-jimp');
const rename = require('gulp-rename');
const del = require('del');

const path = {
    converted: 'converted/',
    src: 'src/*.png',
    clean: 'converted/*.jpg'
};

const convert = () => gulp
    .src(path.src)
    .pipe(jimp({
        quality: 60
    }))
    .pipe(rename(({ dirname, basename, extname }) => {
        basename = basename.replace('quality', '');
        extname = '.jpg';

        return {
            dirname,
            basename,
            extname
        }
    }))
    .pipe(gulp.dest(path.converted));

const clean = () => del([path.clean]);

exports.clean = clean;
exports.default = gulp.series(clean, convert);
