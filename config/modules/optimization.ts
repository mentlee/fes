import { Configuration } from 'webpack';

export const optimization = () => (config: Configuration) => {
  const cacheGroups = {
    react: {
      test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
      priority: -10,
      name: 'react',
    },
    vendor: {
      test: /[\\/]node_modules[\\/]/,
      priority: -20,
      name: 'vendor',
    }
  }

  if (typeof config.optimization === 'undefined') {
    config.optimization = {};
  }

  config.optimization.runtimeChunk = 'single';

  config.optimization.splitChunks = {
    cacheGroups,
    chunks: 'all',
  };

  config.performance = { hints: false };

  return config;
}