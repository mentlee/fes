#!/usr/bin/env node
import process from 'node:process';

import rc from 'rc';
import { Command } from 'commander';

import { Environment } from './types';

import { run } from './scripts/run';
import { defaults } from './scripts/defaults';

const options = rc('fes', defaults);

console.log(options);

const program = new Command();

program
  .command('start')
  .description('start dev server')
  .argument('[entry]', 'entry point')
  .action((entry) => {
    run(Environment.Development, options, entry);
  });

program
  .command('build')
  .description('build application')
  .argument('[entry]', 'entry point')
  .action((entry) => {
    run(Environment.Production, options, entry);
  });

program.parse(process.argv);
