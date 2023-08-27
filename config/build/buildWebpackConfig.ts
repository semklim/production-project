import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import buildPlugins from './buildPlugins/buildPlugins';
import buildLoaders from './buildLoaders/buildLoaders';
import buildResolves from './buildResolves/buildResolves';
import { buildDevServer } from './buildDevServer/buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode , path, isDev } = options;
	return {
		mode: mode,
		entry: path.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: path.build,
			clean: true,
		},
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
    optimization: isDev ? { runtimeChunk: 'single' } : undefined,
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolves(),
	};
}
