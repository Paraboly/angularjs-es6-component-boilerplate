import webpack from "webpack";
import gutil from "gulp-util";
import colorsSupported from "supports-color";
import paths from "../gulp-paths.const";

export default function Webpack(cb) {
  const config = require("../webpack.dist.config");
  config.entry.app = paths.entry;

  webpack(config, (err, stats) => {
    if (err) {
      throw new gutil.PluginError("webpack", err);
    }

    gutil.log(
      "[webpack]",
      stats.toString({
        colors: colorsSupported,
        chunks: false,
        errorDetails: true
      })
    );

    cb();
  });
}
