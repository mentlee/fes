import process from 'node:process';

import { Configuration } from 'webpack';

export const entry = (entryPoint: string) => (config: Configuration) => {
  config.entry = entryPoint;
  config.context = process.cwd();
  return config;
};
