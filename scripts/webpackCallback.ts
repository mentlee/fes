import { Stats } from 'webpack';
import { gray, red, white, yellow } from 'nanocolors';

export const webpackCallback = (error: Error | undefined, result?: Stats) => {
  if (error) {
    console.log(red('Compiled with errors'));
    console.log(red(error.name));
    console.log(white(error.message));

    if (error.stack) console.log(gray(error.stack));

    throw new Error('Compiled with error(s)');
  }

  if (result) {
    const stats = result.toJson();

    if (stats.errors && stats.errors.length > 0) {
      console.log(red(`Compiled with ${stats.errors.length} error(s)`));
      for (const statsError of stats.errors) {
        console.log(red(`- ${statsError.message}`));
        if (statsError.stack) console.log(gray(statsError.stack));
      }

      throw new Error('Compiled with error(s)');
    }

    if (stats.warnings && stats.warnings.length > 0) {
      console.log(yellow(`Compiled with ${stats.warnings.length} warning(s)`));
      for (const warning of stats.warnings) {
        console.log(yellow(`- ${warning.message}`));
      }
    }

    console.log(
      result.toString({
        chunks: false,
        colors: true,
      }),
    );
  }
};
