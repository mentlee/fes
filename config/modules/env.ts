import { Configuration } from 'webpack';
import Dotenv from 'dotenv-webpack';

export const env = () => (config: Configuration) => {
  const plugin = new Dotenv({
    systemvars: true,
  });

  if (typeof config.plugins === 'undefined') {
    config.plugins = [];
  }

  config.plugins.push(plugin);

  return config;
};
