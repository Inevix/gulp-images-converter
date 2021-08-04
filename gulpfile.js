const gulp = require('gulp');
const rename = require('gulp-rename');
const imagesConvert = require('gulp-images-convert');
const del = require('del');

const path = {
    converted: 'converted/',
    src: 'src/*.png',
    clean: 'converted/*'
};

const convert = () => gulp
    .src(path.src)
    .pipe(imagesConvert({ targetType: 'jpg' }))
    .pipe(rename({extname: '.png'}))
    .pipe(gulp.dest(path.converted));

const clean = () => del([path.clean]);

exports.clean = clean;
exports.default = gulp.series(clean, convert);
