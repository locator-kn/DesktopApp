const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const tslint = require('gulp-tslint');
const webserver = require('gulp-webserver');

gulp.task('clean', function () {
    return del('dist/**/*');
});

gulp.task('ts', function () {
    return gulp
        .src('app/**/*.ts')
        .pipe(watch('app/**/*.ts'))
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    return gulp.src('app/**/*.html')
        .pipe(watch('app/**/*.html'))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    return gulp.src('app/**/*.css')
        .pipe(watch('app/**/*.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('web', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: false,
            open: true
        }));
});

gulp.task('build', ['html', 'ts']);
gulp.task('default', ['build']);