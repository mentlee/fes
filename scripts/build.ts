import { webpack } from 'webpack';

import { ConfigBuilder, Environment } from '../config/ConfigBuilder';
import { aliases } from '../config/modules/aliases';
import { analyzer } from '../config/modules/analyzer';
import { clean } from '../config/modules/clean';
import { entry } from '../config/modules/entry';
import { env } from '../config/modules/env';
import { html } from '../config/modules/html';
import { optimization } from '../config/modules/optimization';
import { output } from '../config/modules/output';
import { scss } from '../config/modules/scss';
import { svg } from '../config/modules/svg';
import { typescript } from '../config/modules/typescript';
import { webpackCallback } from './webpackCallback';

export const build = (entryPoint: string, template: string) => {
  const builder = new ConfigBuilder(Environment.Production);
  const config = builder
    .add(entry(entryPoint))
    .add(
      output({
        path: './build',
        filename: '[name].[contenthash:8].js',
        chunkFilename: '[name].[chunkhash:8].js',
        publicPath: '/',
      }),
    )
    .add(typescript())
    .add(scss({ filename: '[name].[contenthash:8].css' }))
    .add(svg())
    .add(html({ template }))
    .add(aliases())
    .add(optimization())
    .add(env())
    .add(clean())
    .add(analyzer())
    .build();

  const compiler = webpack(config);
  compiler.run(webpackCallback);
};
