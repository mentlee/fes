import path from 'node:path';
import process from 'node:process';

import { Configuration } from 'webpack';

type OutputConfig = {
  path: string;
  filename: string;
  chunkFilename: string;
  publicPath?: string;
};

export const output =
  (outputConfig: OutputConfig) => (config: Configuration) => {
    config.output = outputConfig;
    config.output.path = path.resolve(process.cwd(), outputConfig.path);
    return config;
  };
