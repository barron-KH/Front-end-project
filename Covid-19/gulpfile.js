// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const imagemin = require('gulp-imagemin');
const terser = require("gulp-terser");
var replace = require('gulp-replace');


// File paths
const files = { 
    scssPath: 'app/scss/**/*.scss',
    jsPath: 'app/js/*.js',
    imgPath: 'app/img/*'
}

// Sass task: compiles the *.scss file into *.css
function scssTask(){    
    return src(files.scssPath)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(dest('src/css')// put final CSS in dist folder
    );
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask(){
    return src(files.jsPath)
        .pipe(concat("all.js"))
        .pipe(terser())
        .pipe(dest('src/js')
    );
}

// Img task: 
function imgTask(){
    return src(files.imgPath)
        .pipe(imagemin())
        .pipe(dest('src/minifield/images')
    );
}

// Cachebust
function cacheBustTask(){
    var cbString = new Date().getTime();
    return src(['src/*.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('src')
    );
}

// Watch task: watch SCSS and JS files and IMG files for changes
// If any change, run scss and js and img tasks simultaneously
function watchTask(){
    watch([files.scssPath, files.jsPath, files.imgPath],
        {interval: 1000, usePolling: true}, //Makes docker work
        series(
            parallel(scssTask, jsTask, imgTask),
            cacheBustTask
        )
    );    
}

// Export the default Gulp task so it can be run
// Runs the scss and js and img tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
    parallel(scssTask, jsTask, imgTask), 
    cacheBustTask,
    watchTask
);