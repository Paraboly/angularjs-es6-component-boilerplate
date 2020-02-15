import gulp from "gulp";
import path from "path";
import rename from "gulp-rename";
import template from "gulp-template";
import yargs from "yargs";

function ComponentGenerator() {
  const cap = val => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const low = val => {
    return val.charAt(0).toLowerCase() + val.slice(1);
  };

  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || "";
  const destPath = path.join(
    resolveToComponents(),
    parentPath,
    camelCaseToDash(name)
  );

  return gulp
    .src(generator)
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

export default ComponentGenerator;
