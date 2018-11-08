"use strict";
var gulp = require("gulp");
var gutil = require("gulp-util");

var path = require("path");

var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var tildeImporter = require('node-sass-tilde-importer');

gulp.task("watch",function() {
  gulp.start("buildSass");
  gulp.watch("./_javascript/app/**/**.**", ["buildTs"]);
  gulp.watch("./_sass/**/**.scss", ["buildSass"]);
  gulp.watch("./css/main.scss", ["buildSass"]);
});

gulp.task("buildCritical",function() {
  gulp.src("./css/critical.scss")
  .pipe(sass({
    outputStyle: 'compressed',
    importer: tildeImporter,
    includePaths: ['./_sass/']
  })).on("error",sass.logError)
  .pipe(autoprefixer())
  .pipe(gulp.dest("./_includes"));
});

gulp.task("buildSass",function() {
  gulp.src("./css/main.scss")
  .pipe(sass({
    outputStyle: 'compressed',
    importer: tildeImporter,
    includePaths: ['./_sass/'],
    errLogToConsole: true,
  }))
  .on("error", sass.logError)
  .pipe(autoprefixer())
  .pipe(gulp.dest("./css/"));
});

gulp.task("buildTs", function(done) {
  // Webpack Config
  webpack(webpackConfig, onBuild(done));

  // gulp.src("node_modules/bootstrap/scss/**/**")
  // .pipe(gulp.dest("_sass/vendor/bootstrap"));

  // gulp.src("node_modules/vue-material/dist/**/**")
  // .pipe(gulp.dest("_sass/vendor/vue-material"));

});

function onBuild(done) {
  return function build(error, states) {
    if (error) {
      gutil.PluginError("Error", error);
      if (done) {
        done();
      }
    } else {
      gutil.log("[Webpack]", states.toString({

      }));
      gutil.log("webpack: ", gutil.colors.blue("finished compiling v-squared.github.io"));

      if(done) {
        done();
      }
    }
  };
}