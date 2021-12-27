import { webpack } from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import { Environment, Options } from '../types';

import { ConfigBuilder } from '../config/ConfigBuilder';
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

const getCompiler = (options: Options, environment: Environment) => {
  const builder = new ConfigBuilder(options, environment);
  const commonBuilder = builder
    .add(aliases)
    .add(analyzer)
    .add(clean)
    .add(entry)
    .add(env)
    .add(html)
    .add(optimization)
    .add(output)
    .add(scss)
    .add(svg)
    .add(typescript);
  const config = commonBuilder.build();

  const compiler = webpack(config);

  return compiler;
};

export const run = (
  environment: Environment,
  options: Options,
  entryPoint?: string,
) => {
  if (entryPoint) {
    options.entry = entryPoint;
  }

  const compiler = getCompiler(options, environment);

  if (environment === Environment.Development) {
    const server = new WebpackDevServer(
      {
        hot: true,
        historyApiFallback: true,
        port: options.port,
      },
      compiler,
    );

    void server.start();
  }

  if (environment === Environment.Production) {
    compiler.run(webpackCallback);
  }
};
