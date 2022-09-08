const path = require('path');

//여기도 추가
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: ['@babel/polyfill', './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // .png 확장자로 마치는 모든 파일
        loader: 'file-loader', // 파일 로더를 적용한다
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/app.html',
    }),
  ],
};
