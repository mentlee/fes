import path from 'node:path';
import process from 'node:process';

import { Configuration } from 'webpack';
import TsconfigPathPlugin from 'tsconfig-paths-webpack-plugin';

export const typescript = () => (config: Configuration) => {
  const extensions = ['.tsx', '.ts', '.jsx', '.js'];
  const rule = {
    test: /\.tsx?$/,
    use: require.resolve('ts-loader'),
    exclude: /node_modules/,
  };
  const plugin = new TsconfigPathPlugin({
    configFile: path.resolve(process.cwd(), 'tsconfig.json'),
  });

  /**
   * Apply rules
   */
  if (typeof config.module === 'undefined') {
    config.module = {};
  }

  if (typeof config.module.rules === 'undefined') {
    config.module.rules = [];
  }

  config.module.rules.push(rule);

  /**
   * Apply extensions
   */
  if (typeof config.resolve === 'undefined') {
    config.resolve = {};
  }

  if (typeof config.resolve.extensions === 'undefined') {
    config.resolve.extensions = [];
  }

  config.resolve.extensions.push(...extensions);

  /**
   * Apply resolve plugin
   */
  if (typeof config.resolve.plugins === 'undefined') {
    config.resolve.plugins = [];
  }

  config.resolve.plugins.push(plugin);

  return config;
};
