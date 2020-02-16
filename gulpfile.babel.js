import gulp from "gulp";
import {
  Clean,
  ComponentGenerator,
  Webpack,
  Serve
} from "./gulp-tasks/gulp-tasks.export";

gulp.task("webpack", ["clean"], Webpack);

gulp.task("serve", Serve);

gulp.task("watch", ["serve"]);

/**
 * @argument name Name of the component,
 * @argument parent Parent folder for the desired path
 * @description Generate component with all the relevant files to the given path.
 * @example $npm run component --name=list-item --parent=shared/components/layout/list/
 */
gulp.task("component", ComponentGenerator);

gulp.task("clean", Clean);

gulp.task("default", ["watch"]);
