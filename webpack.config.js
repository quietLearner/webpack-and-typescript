const path = require("path");

module.exports = {
  devtool: 'eval-source-map', // to debug source js in browser
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/, // regx file all ts files
        use: "ts-loader", //  use ts-loader to compile
        include: [path.resolve(__dirname, "src")], //under src fold, find all ts files and give them to ts-loader to compile into js files
      },
    ],
  },
  // for import modules, such as import { formData } from './forms';
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    // publicPath: 'public', don't need this, maybe old version needs it
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "development",
};
