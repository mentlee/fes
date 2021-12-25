import { Configuration } from 'webpack';

export const svg = () => (config: Configuration) => {
  const rule = {
    test: /\.svg$/,
    use: {
      loader: require.resolve('@svgr/webpack'),
    },
  };

  if (typeof config.module === 'undefined') {
    config.module = {};
  }

  if (typeof config.module.rules === 'undefined') {
    config.module.rules = [];
  }

  config.module.rules.push(rule);

  return config;
};
