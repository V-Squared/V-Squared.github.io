"use strict";
var gulp = require("gulp");
var gutil = require("gulp-util");
var path = require("path");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

gulp.task("watch",function() {
  gulp.watch("./_javascript/app/**/**.**",["build"]);
});

gulp.task("build", function(done) {
  // Webpack Config
  webpack(webpackConfig, onBuild(done));

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