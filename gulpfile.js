"use strict";
var gulp = require("gulp");
var gutil = require("gulp-util");
var path = require("path");
var webpack = require("webpack");

gulp.task("watch",function() {
  gulp.watch("./_javascript/**/**.**",["build"]);
});

gulp.task("build", function(callback) {
  // Webpack Config
  webpack({
    entry: "./_javascript/site.ts",

    output: {
      publicPath: "/lib/",
      path: path.join(__dirname,"lib"),
      filename: "site.js"
    },

    // source map
    devtool: "#inline-source-map",

    // enable loading modules relatively (without the ../../ prefix)
    resolve: {
      root: path.resolve(__dirname,"_javascript"),
      extensions: ['','.webpack.js','.ts', '.js']
    },

    module: {
      loaders: [
        {
          test: /\.ts$/,
          // Exclude node modules and jekyll stuff
          exclude: [/node_modules/,/_includes/,/_layouts/,/_posts/,/_sass/,/_site/,/css/],
          loader: 'ts-loader'
        },
        {
          test: /\.html$/,
          // Exclude node modules and jekyll stuff
          exclude: [/node_modules/,/_includes/,/_layouts/,/_posts/,/_sass/,/_site/,/css/],
          loader: 'raw-loader'
        }
      ]
    }
  },function(error,states) {
    if(error) throw new gutil.PluginError("webpack", error);
    gutil.log("[webpack]",states.toString({

    }));

    callback();
  });

});