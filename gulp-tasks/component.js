import gulp from "gulp";
import moment from "moment";
import path from "path";
import rename from "gulp-rename";
import template from "gulp-template";
import yargs from "yargs";
import paths from "../gulp-paths.const";

let resolveToComponents = (glob = "") => {
  return path.join(paths.root, "", glob);
};

function ComponentGenerator() {
  const cap = val => {
    return val ? val.charAt(0).toUpperCase() + val.slice(1) : val;
  };
  const low = val => {
    return val ? val.charAt(0).toLowerCase() + val.slice(1) : val;
  };

  const name = yargs.argv.name || "ExampleComponent";
  const parentPath = yargs.argv.parent || "";
  const destPath = path.join(
    resolveToComponents(),
    parentPath,
    camelCaseToDash(name)
  );

  return gulp
    .src(paths.blankTemplates)
    .pipe(
      template({
        name: name,
        upCaseName: cap(name),
        lowCaseName: low(name),
        dashedName: camelCaseToDash(name),
        date: moment().format("LLL")
      })
    )
    .pipe(
      rename(path => {
        path.basename = path.basename.replace("temp", camelCaseToDash(name));
      })
    )
    .pipe(gulp.dest(destPath));
}

/**
 * camelCaseToDash('userId') => "user-id"
 * camelCaseToDash('waitAMoment') => "wait-a-moment"
 * camelCaseToDash('TurboPascal') => "turbo-pascal"
 */
function camelCaseToDash(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
}

export default ComponentGenerator;
