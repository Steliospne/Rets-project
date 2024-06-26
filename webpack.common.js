const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    form: "./src/form.js",
    submit: "./src/submit.js",
    404: "./src/404.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/form.html",
      filename: "form.html",
      inject: "body",
      chunks: ["form"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/submit.html",
      filename: "submit.html",
      inject: "body",
      chunks: ["submit"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/404.html",
      filename: "404.html",
      inject: "body",
      chunks: ["404"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },
};
