import { Configuration } from 'webpack';

export enum Environment {
  Development = 'development',
  Production = 'production',
}

export type Module = (config: Configuration, env: Environment) => Configuration;

export class ConfigBuilder {
  private readonly env: Environment;

  private readonly modules: Module[] = [];

  private readonly config: Configuration = {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util'),
        buffer: require.resolve('buffer'),
        process: require.resolve('process'),
      },
    },
    devtool: 'source-map',
  };

  constructor(env: Environment) {
    this.env = env || Environment.Development;
    this.config.mode = env;
  }

  public add(module: Module) {
    this.modules.push(module);

    return this;
  }

  public build() {
    let finalConfig = this.config;

    for (const module of this.modules) {
      finalConfig = module(finalConfig, this.env);
    }

    return finalConfig;
  }
}
