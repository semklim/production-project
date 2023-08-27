import { ResolveOptions, Resolver } from "webpack";

function buildResolves(): ResolveOptions {

	return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}

export default buildResolves;