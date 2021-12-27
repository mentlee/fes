import { Env, Environment } from '../types';

export const matchEnv = (optionsEnv: Env, builderEnv: Environment) => {
  if (typeof optionsEnv === 'boolean') {
    return optionsEnv;
  }

  return (optionsEnv as Environment) === builderEnv;
};
