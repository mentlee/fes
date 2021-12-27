import path from 'node:path';
import process from 'node:process';

import { Configuration } from 'webpack';

import { Options } from '../../types';

export const aliases = (options: Options) => {
  // Resolve alias paths relative to cwd
  const aliasEntries = Object.entries(options.aliases).map<[string, string]>(
    ([key, alias]) => [key, path.resolve(process.cwd(), alias)],
  );

  const alias = Object.fromEntries(aliasEntries);

  const config: Configuration = {
    resolve: {
      alias,
    },
  };

  return config;
};
