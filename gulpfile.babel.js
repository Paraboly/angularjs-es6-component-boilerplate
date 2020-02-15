"use strict";
import gulp from "gulp";
import {
  Clean,
  ComponentGenerator,
  Webpack,
  Serve
} from "./gulp-tasks/gulp-tasks.export";

// use webpack.config.js to build modules
gulp.task("webpack", ["clean"], Webpack);

gulp.task("serve", Serve);

gulp.task("watch", ["serve"]);

gulp.task("component", ComponentGenerator);

gulp.task("clean", Clean);

gulp.task("default", ["watch"]);
