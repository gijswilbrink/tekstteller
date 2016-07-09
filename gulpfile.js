// Load modules
const source              = require('vinyl-source-stream');
const transform           = require('vinyl-transform');
const gulp                = require('gulp');
const gutil               = require('gulp-util');
const rename              = require('gulp-rename');
const browserify          = require('browserify');
const babelify            = require('babelify');
const watchify            = require('watchify');
const notify              = require('gulp-notify');
const del                 = require('del');
const flatten             = require('gulp-flatten');
const plumber             = require('gulp-plumber');
const sourcemaps          = require('gulp-sourcemaps');
const sass                = require('gulp-sass');
const sassGlob            = require('gulp-sass-glob-import');
const urlAdjuster         = require('gulp-css-url-adjuster');
const autoprefixer        = require('gulp-autoprefixer');
const uglify              = require('gulp-uglify');
const cleanCSS            = require('gulp-clean-css');
const svgmin              = require('gulp-svgmin');
const taskListing         = require('gulp-task-listing');
const buffer              = require('vinyl-buffer');
const historyApiFallback  = require('connect-history-api-fallback');
const browserSync         = require('browser-sync');
const imagemin            = require('gulp-imagemin');
const casperJs            = require('gulp-casperjs');

/**
 * Paths to project folders
 */
var paths = {
  scripts: {
    input:  'src/js/**/*.*',
    output: 'dist/js/'
  },
  styles: {
    input:  'src/sass/**/*.{scss,sass}',
    output: 'dist/css/'
  },
  fonts: {
    input:  'src/fonts/**/*',
    output: 'dist/fonts/'
  },
  svgs: {
    input:  'src/svg/*',
    output: 'dist/svg/'
  },
  images: {
    input:  'src/img/**/*',
    output: 'dist/img/'
  },
  php: {
    input: '**/*.{php,html}'
  }
};

/**
 * Create all clean: tasks
 * These tasks remove pre-existing content from output folders 
 */
for(var type in paths) {
  var oPath = paths[type];
  // only get the output paths
  if(typeof oPath == 'object' && typeof oPath.output != 'undefined') {
    // create task like clean:all, clean:images, etc
    gulp.task('clean:' + type, function () {
      return del.sync(oPath.output);
    });
  }
}

/**
 *  Compress images
 */
gulp.task('build:images', ['clean:images'], function() {
  return gulp.src(paths.images.input)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.output))
});

/**
 *  Build fonts
 *  @todo compress
 */
gulp.task('build:fonts', ['clean:fonts'], function() {
  return gulp.src(paths.fonts.input)
    .pipe(gulp.dest(paths.fonts.output))
});

/**
 *  Compress SVG
 */
gulp.task('build:svgs', ['clean:svgs'], function () {
  return gulp.src(paths.svgs.input)
    .pipe(svgmin())
    .pipe(gulp.dest(paths.svgs.output))
});

/**
 * Build the app.js with browserify
 */
gulp.task('build:scripts', ['clean:scripts'], function() {

  // handle errors with notifcations
  function handleErrors() {
    notify.onError({
      title: 'JavaScript compile error',
      message: '<%= error.message %>'
    }).apply(this, Array.prototype.slice.call(arguments));
    this.emit('end'); // Keep gulp from hanging on this task
  }

  // run browserify and babel on app.js
  var props = {
    entries: ['src/js/app.js'],
    debug : true,
    cache: {},
    packageCache: {},
    extensions: ['.jsx'],
    transform:  [
      babelify.configure({
        presets: ["es2015", "react", "stage-0"]
      }),
      ['envify', {'global': true, NODE_ENV: 'production'}]
      ]
  };
      
  // run browserify for app.js
  return browserify(props).bundle()
    .on('error', handleErrors)
    .pipe(source('app.js'))
    .pipe(gulp.dest(paths.scripts.output)) // save bundled file
    .pipe(buffer())           
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(rename({ suffix: '.min' })) // add .min postfix
    .pipe(uglify()) // minify
    .pipe(sourcemaps.write("./")) // write source map
    .pipe(gulp.dest(paths.scripts.output)) // save minified version
    .pipe(browserSync.reload({stream:true}))
});

/**
 *  Browser sync
 */
gulp.task('serve', function() {
  browserSync.init({
    middleware : [ historyApiFallback() ]
  });
});

/**
 * Process, lint, and minify Sass files
 */
gulp.task('build:styles', ['clean:styles'], function() {
  return gulp.src(paths.styles.input)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: true
    }))
    .pipe(flatten())
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 3 versions']
    }))
    .pipe(gulp.dest(paths.styles.output))
    .pipe(rename({ suffix: '.min' })) // add .min postfix
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(paths.styles.output))
    .pipe(browserSync.reload({stream:true}));
});

/**
 * Reload on change of PHP or HTML
 */
gulp.task('build:php', function() {
  return browserSync.reload();
});

/**
 * Testing with CasperJs
 */
gulp.task('test', function () {
  gulp.src('tests/unit-test.js')
    .pipe(casperJs()); //run casperjs test 
});
/************************************************
 * MAIN TASKS
 ************************************************/

/**
 * Watch all
 */
gulp.task('watch', function() {
  gulp.watch(paths.php.input,   ['build:php']);
  gulp.watch(paths.styles.input,  ['build:styles']);
  gulp.watch(paths.scripts.input, ['build:scripts']);
  gulp.watch(paths.svgs.input,  ['build:svgs']);
  gulp.watch(paths.images.input,  ['build:images']);
});

/**
 * Build all
 */
gulp.task('build', ['build:php','build:styles','build:scripts', 'build:svgs','build:images', 'build:fonts']);

/**
 * Build all and watch task at the beginning
 */
gulp.task('default', ['build', 'watch', 'serve']);

/**
 * Call gulp help to view all possible tasks of this gulp file
 */
gulp.task('help', taskListing);