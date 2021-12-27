import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration, RuleSetUse, WebpackPluginInstance } from 'webpack';

import { matchEnv } from '../../helpers/matchEnv';

import { Environment, Options } from '../../types';

export const scss = (options: Options, environment: Environment) => {
  const sassLoader = {
    loader: require.resolve('sass-loader'),
    options: {
      sourceMap: true,
    },
  };

  const postcssLoader = {
    loader: require.resolve('postcss-loader'),
    options: {
      postcssOptions: {
        plugins: [
          require.resolve('postcss-flexbugs-fixes'),
          [
            require.resolve('postcss-preset-env'),
            {
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            },
          ],
          require.resolve('postcss-normalize'),
        ],
      },
    },
  };

  const cssLoader = {
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 2,
      sourceMap: true,
      modules: true,
    },
  };

  const rule = {
    test: /\.s?css$/,
    use: [
      environment === Environment.Production && MiniCssExtractPlugin.loader,
      environment === Environment.Development &&
        require.resolve('style-loader'),
      cssLoader,
      postcssLoader,
      sassLoader,
    ].filter(Boolean) as RuleSetUse,
  };

  const filename = matchEnv(options.hash, environment)
    ? '[name].[contenthash:8].css'
    : '[name].css';

  const plugin = new MiniCssExtractPlugin({
    filename,
    chunkFilename: '[id].css',
  });

  const config: Configuration = {
    module: {
      rules: [rule],
    },
    plugins: [environment === Environment.Production && plugin].filter(
      Boolean,
    ) as WebpackPluginInstance[],
  };

  return config;
};
