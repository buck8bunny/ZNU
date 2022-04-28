const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    }, 

  devServer: {
    static: './dist',
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets", to: "dist/assets" },
        { from: "src/pages", to: "dist/pages" },
      ],
    }),
    new MiniCssExtractPlugin()],
      module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },



  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  
  mode: 'development'
};

