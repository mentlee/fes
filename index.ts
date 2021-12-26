#!/usr/bin/env node
import process from 'node:process';

import { Command } from 'commander';

import { build } from './scripts/build';
import { start } from './scripts/start';

const program = new Command();

program
  .command('start')
  .description('start dev server')
  .argument('<entry>', 'entry point')
  .argument('[template]', 'path to html template', './public/index.html')
  .action((entry, template) => {
    start(entry, template);
  });

program
  .command('build')
  .description('build application')
  .argument('<entry>', 'entry point')
  .argument('[template]', 'path to html template', './public/index.html')
  .action((entry, template) => {
    build(entry, template);
  });

program.parse(process.argv);
