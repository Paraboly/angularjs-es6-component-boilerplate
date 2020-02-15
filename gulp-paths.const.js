import path from "path";

let root = "lib";

// helper method for resolving paths
let resolveToApp = (glob = "") => {
  return path.join(root, "app", glob); // app/{glob}
};

let resolveToComponents = (glob = "") => {
  return path.join(root, "app/components", glob); // app/components/{glob}
};

// map of all paths
const paths = {
  js: resolveToComponents("**/*!(.spec.js).js"), // exclude spec files
  scss: resolveToApp("**/*.scss"), // stylesheets
  html: [resolveToApp("**/*.html"), path.join(root, "index.html")],
  entry: ["babel-polyfill", path.join(__dirname, root, "index.js")],
  output: root,
  blankTemplates: path.join(__dirname, "generator", "component/**/*.**"),
  dest: path.join(__dirname, "dist")
};

export default paths;
