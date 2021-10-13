/* eslint-disable no-console */
import { Stats } from 'webpack';
import { gray, red, white, yellow } from 'nanocolors';

export const webpackCallback = (error: Error | undefined, result?: Stats) => {
  if (error) {
    console.log(red('Compiled with errors'));
    console.log(red(error.name));
    console.log(white(error.message));

    if (error.stack) console.log(gray(error.stack));

    process.exit(1);
  }

  if (result) {
    const stats = result.toJson();

    if (stats.errors && stats.errors.length > 0) {
      console.log(red(`Compiled with ${stats.errorsCount} error(s)`));
      stats.errors.forEach((statsError) => {
        console.log(red(`- ${statsError.message}`));
        if (statsError.stack) console.log(gray(statsError.stack));
      });

      process.exit(1);
    }

    if (stats.warnings && stats.warnings.length > 0) {
      console.log(yellow(`Compiled with ${stats.warningsCount} warning(s)`));
      stats.warnings.forEach((warning) => {
        console.log(yellow(`- ${warning.message}`));
      });
    }

    console.log(
      result.toString({
        chunks: false,
        colors: true,
      })
    );
  }
};
