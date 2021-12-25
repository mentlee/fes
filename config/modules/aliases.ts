import path from 'node:path';
import process from 'node:process';

import { Configuration } from 'webpack';

export const aliases = () => (config: Configuration) => {
  const alias = { '@': path.resolve(process.cwd(), './src') };

  if (typeof config.resolve === 'undefined') {
    config.resolve = {};
  }

  if (typeof config.resolve.alias === 'undefined') {
    config.resolve.alias = {};
  }

  config.resolve.alias = { ...config.resolve.alias, ...alias };

  return config;
};
