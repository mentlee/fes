import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { Configuration } from 'webpack';

export const clean = () => (config: Configuration) => {
  const plugin = new CleanWebpackPlugin();

  if (typeof config.plugins === 'undefined') {
    config.plugins = [];
  }

  config.plugins.push(plugin);

  return config;
}