const {  src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Function to compile SASS files to CSS
function buildStyles() {
  return src('./sass/**/*.sass') // Set the path to your SASS files
    .pipe(sass().on('error', sass.logError)) // Compile SASS to CSS and log errors
    .pipe(dest('dist')); // Set the destination folder for compiled CSS
}

// Watch for changes in SASS files and recompile
function watchFiles() {
  watch('./sass/**/*.sass', buildStyles);
}

exports.default = series(buildStyles, watchFiles);
exports.build = buildStyles;