import process from 'node:process';

import { Configuration } from 'webpack';

import { Options } from '../../types';

export const entry = (options: Options) => {
  const config: Configuration = {
    entry: options.entry,
    context: process.cwd(),
  };

  return config;
};
