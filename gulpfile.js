const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');

const resources = {
    css: [
        "./bower_components/reveal.js/css/reveal.css",
        "./bower_components/reveal.js/css/theme/night.css",
        "./bower_components/reveal.js/lib/css/zenburn.css",
        "./css/*.css"
    ],
    js: [
        "./bower_components/reveal.js/lib/js/head.min.js",
        "./bower_components/reveal.js/js/reveal.js",
        "./bower_components/reveal.js/plugin/highlight/highlight.js",
        "./js/*.js"
    ]
};

const build = (resurce) => new Promise((y) => {
    gulp.src(resources[resurce])
        .pipe(concat('bundle.' + resurce))
        .pipe(gulp.dest('build/'))
        .on('end', () => y);
});

gulp.task('default', (done) => {
    return Promise.all([
        build('css'),
        build('js')
    ]).then(done);
});

gulp.task('watch', () => {
    gulp.watch(['index.html', 'js/*.js', 'css/*.css'], ['default']);
});
