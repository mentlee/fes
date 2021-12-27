import path from 'node:path';
import process from 'node:process';

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { Configuration } from 'webpack';

import { Environment, Options } from '../../types';

import { matchEnv } from '../../helpers/matchEnv';

export const analyzer = (options: Options, environment: Environment) => {
  const plugin = new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: false,
    reportFilename: path.resolve(process.cwd(), 'stats', 'report.html'),
  });

  const include = matchEnv(options.analyzer, environment);

  if (!include) {
    return {};
  }

  const config: Configuration = {
    plugins: [plugin],
  };

  return config;
};
