var gulp        = require('gulp'),
    sourcemaps  = require('gulp-sourcemaps'),
    babel       = require('gulp-babel'),
    copy        = require('gulp-copy'),
    server      = require('gulp-develop-server'),
    del         = require('del'),
    plumber     = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    source      = require('vinyl-source-stream');

var paths = {
    scripts: ['**/*.js'],
    tests: ['tests/**/*.js'],
    server_file: 'app.js',
    server_path: './',
    build_path: 'build/'
};

gulp.task('babel', function() {
    return gulp.src(paths.scripts)
        .pipe(babel({ stage: 0, optional: ["runtime"] }))
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