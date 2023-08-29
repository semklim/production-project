import { ResolveOptions } from "webpack";
import { BuildOptions } from "../types/config";

function buildResolves({ path }: BuildOptions): ResolveOptions {

	return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.src, 'node_modules'],
  }
}

export default buildResolves;