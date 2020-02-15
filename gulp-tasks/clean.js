import gutil from "gulp-util";
import del from "del";

import paths from "../gulp-paths.const";

function Clean(cb) {
  del([paths.dest]).then(function(paths) {
    gutil.log("[clean]", paths);
    cb();
  });
}

export default Clean;
