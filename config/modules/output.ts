import path from 'path';
import { Configuration } from 'webpack';

type OutputConfig = {
  path: string;
  filename: string;
  publicPath?: string;
};

export const output = (outputConfig: OutputConfig) => (config: Configuration) => {
  config.output = outputConfig;
  config.output.path = path.resolve(process.cwd(), outputConfig.path);
  return config;
};
