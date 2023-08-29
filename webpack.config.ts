import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPath } from './config/build/types/config';

const paths: BuildPath = {
	entry: path.resolve(__dirname, 'src', 'main.tsx'),
	html: path.resolve(__dirname, 'public', 'index.html'),
	build: path.resolve(__dirname, 'build'),
  src: path.resolve(__dirname, 'src'),
};

export default (env: BuildEnv) => {
	const port = env.port || 3000;
	const mode: BuildMode = env.mode || 'development';
	const isDev = mode === 'development';

	const config = buildWebpackConfig({
		mode,
		path: paths,
		isDev,
		port,
	});

	return config;
};
