import path from 'path';
import { Configuration } from 'webpack';

type OutputConfig = {
  path: string;
  filename: string;
  chunkFilename: string;
  publicPath?: string;
};

export const output = (outputConfig: OutputConfig) => (config: Configuration) => {
  config.output = outputConfig;
  config.output.path = path.resolve(process.cwd(), outputConfig.path);
  config.output.chunkFilename
  return config;
};
