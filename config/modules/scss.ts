import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration, RuleSetUse } from 'webpack';
import { Environment } from '../ConfigBuilder';

type ScssConfig = {
  filename: string;
};

export const scss =
  (scssConfig: ScssConfig) => (config: Configuration, env: Environment) => {
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
        env === Environment.Production && MiniCssExtractPlugin.loader,
        env === Environment.Development && require.resolve('style-loader'),
        cssLoader,
        postcssLoader,
        sassLoader,
      ].filter(Boolean) as RuleSetUse,
    };

    const plugin = new MiniCssExtractPlugin({
      filename: scssConfig.filename,
      chunkFilename: '[id].css',
    });

    if (!config.module) {
      config.module = {};
    }

    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.module.rules.push(rule);

    if (env === Environment.Production) {
      if (!config.plugins) {
        config.plugins = [];
      }

      config.plugins.push(plugin);
    }

    return config;
  };
