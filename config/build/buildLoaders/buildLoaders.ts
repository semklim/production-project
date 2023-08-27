import { RuleSetRule } from 'webpack';

function buildLoaders(): RuleSetRule[] {

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

	return [
		typescriptLoader,
	];
}

export default buildLoaders;
