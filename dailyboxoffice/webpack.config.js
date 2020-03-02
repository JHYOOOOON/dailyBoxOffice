// import path from 'path'
const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const ENTRY_FILE = path.resolve(__dirname, "src", "index.js");
const OUTPUT_DIR = path.join(__dirname, "dist");

const MODE = process.env.WEBPACK_ENV;
const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_module)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"],
            plugins: [
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              "transform-class-properties"
            ]
          }
        }
      },
      {
        test: /\.(scss)$/,
        use: ExtractCSS.extract(["css-loader", "postcss-loader", "sass-loader"])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "webpack.bundle.js"
  },
  plugins: [new ExtractCSS("styles.scss")]
};

// export default랑 같은 거
module.exports = config;
