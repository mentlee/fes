import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import { Options, ConfigModule, Environment } from '../types';

export class ConfigBuilder {
  private readonly environment: Environment;
  private readonly options: Options;
  private readonly modules: ConfigModule[];

  constructor(options: Options, environment: Environment) {
    this.environment = environment;
    this.options = options;
    this.modules = [];
  }

  add(module: ConfigModule) {
    this.modules.push(module);

    return this;
  }

  build() {
    let config: Configuration = {
      mode:
        this.environment === Environment.Development
          ? 'development'
          : 'production',
    };

    for (const module of this.modules) {
      config = merge<Configuration>(
        config,
        module(this.options, this.environment),
      );
    }

    return config;
  }
}
