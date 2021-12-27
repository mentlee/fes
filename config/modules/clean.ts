import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { Configuration } from 'webpack';

export const clean = () => {
  const plugin = new CleanWebpackPlugin();

  const config: Configuration = {
    plugins: [plugin],
  };

  return config;
};
