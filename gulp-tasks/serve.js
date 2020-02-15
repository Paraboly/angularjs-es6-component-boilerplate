import serve from "browser-sync";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import colorsSupported from "supports-color";
import historyApiFallback from "connect-history-api-fallback";
import paths from "../gulp-paths.const";
import webpack from "webpack";

function Serve() {
  const config = require("../webpack.dev.config");
  config.entry.app = [
    // this modules required to make HRM working
    // it responsible for all this webpack magic
    "webpack-hot-middleware/client?reload=true"
    // application entry point
  ].concat(paths.entry);

  var compiler = webpack(config);

  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: { baseDir: `../${root}` },
    middleware: [
      historyApiFallback(),
      webpackDevMiddleware(compiler, {
        stats: {
          colors: colorsSupported,
          chunks: false,
          modules: false
        },
        publicPath: config.output.publicPath
      }),
      webpackHotMiddleware(compiler)
    ]
  });
}

export default Serve;
