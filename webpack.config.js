const path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: { type: "umd2" }, // commonJs2
    libraryTarget: "umd",
  },
  resolve: {
    fallback: {
      process: require.resolve("process/browser"),
      zlib: require.resolve("browserify-zlib"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util"),
      buffer: require.resolve("buffer"),
      assert: require.resolve("assert"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    }),
  ],
  externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
    },
  },
};
