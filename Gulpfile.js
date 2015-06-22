var gulp        = require('gulp'),
    sourcemaps  = require('gulp-sourcemaps'),
    babel       = require('gulp-babel'),
    copy        = require('gulp-copy'),
    server      = require('gulp-develop-server'),
    del         = require('del'),
    plumber     = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    source      = require('vinyl-source-stream'),
    jest        = require('jest-cli'),
    mocha       = require('gulp-mocha');

var paths = {
    scripts: ['src/**/*.js'],
    tests: ['tests/**/*.js'],
    server_file: 'app.js',
    server_path: './',
    build_path: 'build/'
};

gulp.task('babel', function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(babel({ stage: 0, optional: ["runtime"] }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.build_path));
});

gulp.task('server:run', ['babel'], function() {
    server.listen( { path: paths.build_path + paths.server_file } );
});

gulp.task('server:restart', function() {
    server.restart();
});

// Maybe something wrong with this:
gulp.task('clean', function() {
    return del([paths.build_path]);
});

gulp.task('default', function() {
    runSequence(
        //'clean',
        ['babel'],
        'server:run'
    );
});

gulp.task('watch', ['default'], function () {
    gulp.watch(paths.scripts, function() {
        runSequence(['babel'], 'server:restart');
    });
});

gulp.task('jest', ['babel'], function(done) {
    return jest.runCLI({config : { rootDir: paths.build_path }}, ".", function() {
        done();
    });
});

gulp.task('mocha', ['babel'], function() {
    return gulp.src(paths.build_path + "__tests__/**/*.js")
        .pipe(mocha());
});

gulp.task('mocha:watch', ['mocha'], function() {
    gulp.watch(paths.scripts, ['mocha']);
});
