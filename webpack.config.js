var webpack = require("webpack");
var path = require("path");

module.exports = {
  mode: "production",
  entry: "./_javascript/app/app.ts",

  output: {
    publicPath: "/lib/",
    path: path.join(__dirname,"lib"),
    filename: "app.js"
  },

  resolve: {
    extensions: [".js",".ts"],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

  externals: {
    jquery: "jQuery"
  },


  // source map
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.ts$/,
        // Exclude node modules and jekyll stuff
        include: [/_javascript/],
        exclude: [/_js_old/,/node_modules/],
        loader: 'ts-loader'
      },
      {
        test: /\.html$/,
        // Exclude node modules and jekyll stuff
        exclude: [/node_modules/,/_includes/,/_layouts/,/_posts/,/_sass/,/_site/,/css/],
        loader: 'raw-loader'
      }
    ]
  },

  optimization: {
    minimize: true
  },

  plugins: [
    //new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};
