const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/scripts/index.js",
    /*user: "./src/scripts/user.js", // Путь к вашему второму скрипту
    analytics: "./src/scripts/analytics.js", // Путь к вашему третьему скрипту
    */
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js", // Используем [name] для динамического имени файла
    publicPath: "",
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: 'images/[name].[hash][ext]',
        }
      }, 
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]',
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/user.html",
      filename: "user.html",
      chunks: ["user"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/analytics.html",
      filename: "analytics.html",
      chunks: ["analytics"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pricing.html",
      filename: "pricing.html",
      chunks: ["pricing"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/settings.html",
      filename: "settings.html",
      chunks: ["settings"],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
