import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from "./types/config";

export default function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            'src/app/styles/variables/global.scss',
            'src/app/styles/variables/mixins.scss',
          ]
        },
      }
    ],
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  // Оказывается file-loader deprecated на v5...
  const fileLoader = {
    test: /\.(png|jpe?g|gif|ttf|eot|woff|woff2)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/[name].[hash][ext]'
    }
  };

  return [
    fileLoader,
    svgLoader,
    typeScriptLoader,
    scssLoader,
  ];
}
