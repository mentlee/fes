import path from 'node:path';
import process from 'node:process';

import { Configuration } from 'webpack';
import TsconfigPathPlugin from 'tsconfig-paths-webpack-plugin';

export const typescript = () => {
  const rule = {
    test: /\.tsx?$/,
    use: require.resolve('ts-loader'),
    exclude: /node_modules/,
  };
  const plugin = new TsconfigPathPlugin({
    configFile: path.resolve(process.cwd(), 'tsconfig.json'),
  });
  const extensions = ['.tsx', '.ts', '.jsx', '.js'];

  const config: Configuration = {
    module: {
      rules: [rule],
    },
    resolve: {
      plugins: [plugin],
      extensions,
    },
  };

  return config;
};
