import { BuildOptions } from "../types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer({ path, port }: BuildOptions): DevServerConfiguration {
  return {
    port,
    open: true,
    static: {
      directory: path.build,
    },
    compress: true,
  };
}