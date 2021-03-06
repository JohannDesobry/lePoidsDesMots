const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const streamify = require('gulp-streamify');
const gulpif = require('gulp-if');

const config = {
  src: 'src/',
  dist: 'dist/',
  port: 8080,
  env: process.env.NODE_ENV === 'production'
};

gulp.task('liveserver', () => {
  browserSync.init({
    server: config.dist,
    port: config.port,
    open: 'local'
  });
});

gulp.task('sass', () =>
  gulp
    .src(config.src + 'scss/*.scss')
    .pipe(
      plumber({
        errorHandler: notify.onError('SASS Error: <%= error.message %>')
      })
    )
    .pipe(gulpif(!config.env, sourcemaps.init()))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulpif(!config.env, sourcemaps.write()))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    )
    .pipe(
      rename(path => {
        path.basename += '.min';
      })
    )
    .pipe(gulp.dest(config.dist + 'assets/css'))
    .pipe(browserSync.stream())
);

gulp.task('javascript', () =>
  browserify({
    entries: config.src + 'js/app.js',
    debug: true
  })
    .transform(babelify, { presets: ['es2015'] })
    .on('error', gutil.log)
    .bundle()
    .on('error', gutil.log)
    .pipe(source('bundle.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(config.dist + 'assets/js'))
    .pipe(browserSync.stream())
);

gulp.task('javascript2', () =>
  browserify({
    entries: config.src + 'js2/home.js',
    debug: true
  })
    .transform(babelify, { presets: ['es2015'] })
    .on('error', gutil.log)
    .bundle()
    .on('error', gutil.log)
    .pipe(source('main.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(config.dist + 'assets/js'))
    .pipe(browserSync.stream())
);

gulp.task('javascript3', () =>
  browserify({
    entries: config.src + 'js3/end.js',
    debug: true
  })
    .transform(babelify, { presets: ['es2015'] })
    .on('error', gutil.log)
    .bundle()
    .on('error', gutil.log)
    .pipe(source('ending.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(config.dist + 'assets/js'))
    .pipe(browserSync.stream())
);

gulp.task('images', () =>
  gulp
    .src(config.src + 'img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest(config.dist + 'assets/img'))
    .pipe(browserSync.stream())
    .pipe(notify('Image minified: <%= file.relative %>'))
);

gulp.task('fonts', () =>
  gulp
    .src(config.src + 'fonts/**/*')
    .pipe(gulp.dest(config.dist + 'assets/fonts'))
    .pipe(browserSync.stream())
);

gulp.task('sound', () =>
  gulp
    .src(config.src + 'sounds/**/*')
    .pipe(gulp.dest(config.dist + 'assets/sounds'))
    .pipe(browserSync.stream())
);

gulp.task('video', () =>
  gulp
    .src(config.src + 'video/**/*')
    .pipe(gulp.dest(config.dist + 'assets/video'))
    .pipe(browserSync.stream())
);

gulp.task('pug', () =>
  gulp
    .src(config.src + '*.pug')
    .pipe(pug())
    .pipe(gulp.dest(config.dist))
    .pipe(browserSync.stream())
);

gulp.task('watch', () => {
  gulp.watch(config.src + '**/*.pug', ['pug']);
  gulp.watch(config.src + 'scss/**/*.scss', ['sass']);
  gulp.watch(config.src + 'js/*.js', ['javascript']);
  gulp.watch(config.src + 'js2/*.js', ['javascript2']);
  gulp.watch(config.src + 'js3/*.js', ['javascript3']);
  gulp.watch(config.src + 'img/**/*', ['images']);
  gulp.watch(config.src + 'font/*', ['fonts']);
  gulp.watch(config.src + 'video/*', ['video']);
  gulp.watch(config.src + 'sounds/*', ['sound']);
});

gulp.task('build', ['pug', 'sass', 'javascript','javascript2', 'javascript3', 'images', 'fonts', 'sound', 'video'], () => {});
gulp.task('default', ['build', 'liveserver', 'watch'], () => {});
