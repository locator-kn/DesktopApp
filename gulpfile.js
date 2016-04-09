const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const tslint = require('gulp-tslint');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');
const KarmaServer = require('karma').Server;

gulp.task('clean', function () {
    return del('dist/**/*');
});

gulp.task('ts', function () {
    return gulp
        .src('app/**/*.ts')
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('web', function () {
    gulp.src('./')
        .pipe(webserver({
            livereload: false,
            open: true
        }));
});

gulp.task('watch', ['build', 'web'], function () {
    gulp.watch('app/**/*.ts', ['ts']);
    gulp.watch('app/**/*.css', ['css']);
    gulp.watch('app/**/*.html', ['html']);
});

gulp.task('test', function(done) {
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function() { done(); }).start();
});

gulp.task('build', ['html', 'ts', 'css']);
gulp.task('default', ['build']);
