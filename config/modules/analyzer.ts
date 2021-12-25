import path from 'node:path';
import process from 'node:process';

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { Configuration } from 'webpack';

export const analyzer = () => (config: Configuration) => {
  const plugin = new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: false,
    reportFilename: path.resolve(process.cwd(), 'stats', 'report.html'),
  });

  if (typeof config.plugins === 'undefined') {
    config.plugins = [];
  }

  config.plugins.push(plugin);

  return config;
};
