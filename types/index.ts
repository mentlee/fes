import { Configuration } from 'webpack';

export enum Environment {
  Production = 'prod',
  Development = 'dev',
}

export type Env = boolean | 'prod' | 'dev';

export type Options = {
  entry: string;
  template: string;
  aliases: Record<string, string>;
  outDir: string;
  publicPath: string;
  hash: Env;
  analyzer: Env;
  port: number;
};

export type ConfigModule = (
  options: Options,
  environment: Environment,
) => Configuration;
