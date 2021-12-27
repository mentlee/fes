import { Configuration } from 'webpack';
import Dotenv from 'dotenv-webpack';

export const env = () => {
  const plugin = new Dotenv({
    systemvars: true,
  });

  const config: Configuration = {
    plugins: [plugin],
  };

  return config;
};
