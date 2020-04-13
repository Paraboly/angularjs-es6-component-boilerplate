import serve from "browser-sync";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import colorsSupported from "supports-color";
import historyApiFallback from "connect-history-api-fallback";
import paths from "../gulp-paths.const";
import webpack from "webpack";
import { createProxyMiddleware } from "http-proxy-middleware";

function Serve() {
  const config = require("../webpack.dev.config");
  config.entry.app = [
    // this modules required to make HRM working
    // it responsible for all this webpack magic
    "webpack-hot-middleware/client?reload=true"
    // application entry point
  ].concat(paths.entry);

  var compiler = webpack(config);

  let middleware = [
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
  ];

  if (process.env.API_ADDRESS) middleware.unshift(createProxy())

  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: { baseDir: `../${root}` },
    middleware
  });
}

function createProxy() {
  const apis = ["/test"]; // add api end points if necessary: eg: ["/test", "/uaa"]
  return createProxyMiddleware(apis, {
    target: "http://" + process.env.API_ADDRESS,
    secure: false,
    logLevel: "debug",
    changeOrigin: true
  });
}

export default Serve;
