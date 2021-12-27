import { Configuration } from 'webpack';

export const svg = () => {
  const rule = {
    test: /\.svg$/,
    use: {
      loader: require.resolve('@svgr/webpack'),
    },
  };

  const config: Configuration = {
    module: {
      rules: [rule],
    },
  };

  return config;
};
