import { webpack } from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import { ConfigBuilder, Environment } from '../config/ConfigBuilder'
import { aliases } from '../config/modules/aliases';
import { analyzer } from '../config/modules/analyzer';
import { clean } from '../config/modules/clean';
import { entry } from '../config/modules/entry';
import { html } from '../config/modules/html';
import { optimization } from '../config/modules/optimization';
import { output } from '../config/modules/output';
import { scss } from '../config/modules/scss';
import { svg } from '../config/modules/svg';
import { typescript } from '../config/modules/typescript';

export const start = (entryPoint: string, template: string) => {
  const builder = new ConfigBuilder(Environment.Development);
  const config = builder
    .add(entry(entryPoint))
    .add(output({
      path: './build',
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: '/'
    }))
    .add(typescript())
    .add(scss({ filename: '[name].css' }))
    .add(svg())
    .add(html({ template }))
    .add(aliases())
    .add(optimization())
    .add(clean())
    .add(analyzer())
    .build();
  
  const compiler = webpack(config);
  const server = new WebpackDevServer(
    {
      hot: true,
      historyApiFallback: true,
    },
    compiler
  );

  server.start();
};
