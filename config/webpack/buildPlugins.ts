import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export default function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html,
      favicon: "src/shared/assets/favicon/favicon.svg"
    }),
    // Для того, чтобы в проде CSS сжать
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];

  if (isDev) {
      //TODO: @pmmmwh/react-refresh-webpack-plugin
  }

  return plugins;
}
