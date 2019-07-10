'use strict'

const postcss = require('gulp-postcss')
const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('autoprefixer')
const sassLint = require('gulp-sass-lint')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')
const standard = require('gulp-semistandard')
const imagemin = require('gulp-imagemin');

const styleInput = './css/src/**/*.scss'
const styleOutput = './css/'

const scriptInput = './scripts/src/**/*.js'
const scriptOutput = './scripts/'

const imageInput = './images/src/*'
const imageOutput = './images/'

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
}

gulp.task('lint-styles', () => {
  return gulp
    .src(styleInput)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
})


gulp.task('styles', gulp.series('lint-styles', () => {
  const processors = [
    autoprefixer()
  ]

  return gulp
    .src(styleInput)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(styleOutput))
}))

gulp.task('lint-scripts', (done) => {
  return gulp.src(scriptInput)
  .pipe(standard())
  .pipe(standard.reporter('default', {
    showFilePath: true,
    quiet: true
  }))
})

gulp.task('scripts', gulp.series('lint-scripts', (done) => {
  return gulp.src(scriptInput)
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(scriptOutput))
}))

gulp.task('images', (done) => {
  return gulp.src(imageInput)
    .pipe(imagemin())
    .pipe(gulp.dest(imageOutput))
})

gulp.task('watch:styles', gulp.series('styles', () => {
  return gulp
    .watch(styleInput, gulp.series('styles'));
}))

gulp.task('watch:scripts', gulp.series('scripts', () => {
  return gulp
  .watch(scriptInput, gulp.series('scripts'));
}))

gulp.task('watch', gulp.parallel('watch:styles', 'watch:scripts'))

gulp.task('lint', gulp.parallel('lint-styles', 'lint-scripts'))

gulp.task('default', gulp.series('watch'))