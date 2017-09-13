'use strict'

var postcss = require('gulp-postcss')
var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('autoprefixer')
var sassLint = require('gulp-sass-lint')
var webpack = require('webpack-stream')
var webpackConfig = require('./webpack.config')

var styleInput = './css/sass/**/*.scss'
var styleOutput = './css/'

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
}

gulp.task('sass', function () {
  var processors = [
    autoprefixer({browsers: ['last 2 version']})
  ]
  return gulp
    .src(styleInput)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(styleOutput))
})

gulp.task('scripts', function () {
  return webpack(webpackConfig)
    .pipe(gulp.dest(webpackConfig.output.path))
})

// Linting config located in .sass-link.yml
gulp.task('lint-sass', function () {
  return gulp
    .src(styleInput)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
})

gulp.task('watch:sass', function () {
  return gulp
    .watch(styleInput, ['sass'])
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
    })
})

gulp.task('watch:scripts', function () {
  var config = Object.assign({}, webpackConfig, { watch: true })
  return webpack(config).pipe(gulp.dest(config.output.path))
})

// Watch for changes
gulp.task('watch', ['watch:sass', 'watch:scripts'])

// Build dist output
gulp.task('build', ['sass', 'scripts'])

// Setup lint task
// TODO: Remove this and have it as part of the sass build
// process the same was JS linting is part of the bundling process?
gulp.task('lint', ['lint-sass'])

// Default task will be the watch task for ease of use
gulp.task('default', ['watch'])
