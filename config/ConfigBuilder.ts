import { Configuration } from 'webpack';

export enum Environment {
  Development = 'development',
  Production = 'production',
}

export type Module = (config: Configuration, env: Environment) => Configuration

export class ConfigBuilder {
  private env = Environment.Development;

  private modules: Module[] = [];

  private config: Configuration = {
    resolve: {
      fallback: {
        // crypto: require.resolve('crypto-browserify'),
        // stream: require.resolve('stream-browserify'),
      },
    },
    devtool: 'source-map',
  };

  constructor(env: Environment) {
    this.env = env;
    this.config.mode = env;
  }

  add(module: Module) {
    this.modules.push(module);

    return this;
  }

  build() {
    return this.modules.reduce(
      (config, module) => module(config, this.env),
      this.config
    );
  }
}
