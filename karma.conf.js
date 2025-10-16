module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: ["src/**/*.test.js"],
    preprocessors: {
      "src/**/*.test.js": ["webpack"],
    },
    webpack: {
      mode: "development",
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
          },
        ],
      },
      resolve: {
        extensions: [".js", ".jsx"],
      },
    },
    reporters: ["progress"],
    browsers: ["ChromeHeadless"],
    singleRun: true,
  });
};
