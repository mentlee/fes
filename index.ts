#!/usr/bin/env node
import yargs from 'yargs';
import { build } from './scripts/build';
import { start } from './scripts/start';

yargs(process.argv.slice(2))
  .command('start <entry> [template]', 'Start dev server', (builder) => {
    return builder.positional('entry', {
      type: 'string',
      demandOption: true,
    })
    .positional('template', {
      type: 'string',
      default: './public/index.html',
    })
  }, (argv) => start(argv.entry, argv.template))
  .command('build <entry>', 'Build project', (builder) => {
    return builder.positional('entry', {
      type: 'string',
      demandOption: true,
    })
    .positional('template', {
      type: 'string',
      default: './public/index.html',
    })
  }, (argv) => build(argv.entry, argv.template))
  .demandCommand()
  .argv;
