var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var typescript = require('gulp-typescript');
var tslint = require("gulp-tslint");
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var karma = require('gulp-karma');

var typescriptProject = typescript.createProject({
  target: "ES5", 
  removeComments: true, 
  sortOutput: true
});

var paths = {
    sass: ['./scss/**/*.scss'],
    ts: ['./src/**/*.ts'],
    tests: [
        'www/lib/angular/angular.js',
        'www/lib/angular-mocks/angular-mocks.js',
        'src/**/*.ts',
        'test/**/*.js'
    ]
};

gulp.task('default', ['sass']);
 
gulp.task('karma', function(done) {
    gulp.src(paths.tests)
    .pipe(karma({
        configFile: 'karma.conf.js',
        action: 'run'
    }))
    .on('end', done);
});

gulp.task("tslint", function(done) {
    gulp.src(paths.ts)
    .pipe(plumber({errorHandler: notify.onError('Error: TSLint')}))
    .pipe(tslint())
    .pipe(tslint.report("verbose"))
    .on('end', done);
});

gulp.task('build', function(done) {
    gulp.src(paths.ts)
    .pipe(plumber({errorHandler: notify.onError('Error: typescript')}))
    .pipe(typescript(typescriptProject))
    .pipe(concat("main.js"))
    .pipe(gulp.dest('./www/js/'))
    .on('end', done);
});

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.ts, ['build']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
