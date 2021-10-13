import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

type HtmlConfig = {
  template: string;
}

export const html = ({ template }: HtmlConfig) => (config: Configuration) => {
  const plugin = new HtmlWebpackPlugin({
    template: path.resolve(process.cwd(), template),
  })

  if (typeof config.plugins === 'undefined') {
    config.plugins = [];
  }

  config.plugins.push(plugin);

  return config;
}