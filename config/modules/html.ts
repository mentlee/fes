import path from 'node:path';
import process from 'node:process';

import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { Options } from '../../types';

export const html = (options: Options) => {
  const plugin = new HtmlWebpackPlugin({
    template: path.resolve(process.cwd(), options.template),
  });

  const config: Configuration = {
    plugins: [plugin],
  };

  return config;
};
