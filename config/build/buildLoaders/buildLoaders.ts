import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from '../types/config';

function buildLoaders({ isDev }:BuildOptions): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const SASSLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\.s[ac]ss$/,
            localIdentName: isDev
            ? '[path][name]__[local]--[hash:base64:5]' 
            : '[hash:base64:8]',
          },
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

	return [
		typescriptLoader,
    SASSLoader,
	];
}

export default buildLoaders;
