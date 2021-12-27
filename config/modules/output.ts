import path from 'node:path';
import process from 'node:process';

import { Configuration } from 'webpack';

import { matchEnv } from '../../helpers/matchEnv';

import { Environment, Options } from '../../types';

export const output = (options: Options, environment: Environment) => {
  const hash = matchEnv(options.hash, environment);
  const outPath = path.resolve(process.cwd(), options.outDir);

  const config: Configuration = {
    output: {
      path: outPath,
      filename: hash ? '[name].[contenthash:8].js' : '[name].js',
      chunkFilename: hash ? '[name].[chunkhash:8].js' : '[name].js',
      publicPath: options.publicPath,
    },
  };
  return config;
};
