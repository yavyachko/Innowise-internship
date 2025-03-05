import { resolve, join } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const entry = {
  main: "./src/scripts/index.js",
};
export const output = {
  filename: "bundle.js",
  path: resolve(__dirname, "dist"),
  clean: true,
};
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    },
  ],
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html', // Шаблон для HTML файла
    filename: 'index.html', // Имя выходного HTML файла
  }),
];
export const devtool = 'source-map';
export const devServer = {
  contentBase: join(__dirname, 'dist'), // Папка для статических файлов
  compress: true, // Включение сжатия
  port: 9000, // Порт для dev сервера
};
export const mode = 'development';