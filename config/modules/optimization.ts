import { Configuration } from 'webpack';

export const optimization = () => {
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
    },
  };

  const config: Configuration = {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups,
        chunks: 'all',
      },
    },
    performance: {
      hints: false,
    },
  };

  return config;
};
