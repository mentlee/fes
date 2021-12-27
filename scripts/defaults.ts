import { Options } from '../types';

export const defaults: Options = {
  entry: './src/index.ts',
  template: './public/index.html',
  aliases: {
    '@': './src',
  },
  outDir: './build',
  publicPath: '/',
  hash: 'prod',
  analyzer: 'dev',
  port: 8080,
};
