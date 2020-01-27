import appComponent from "./app.component";

/**
 * @type AngularJS.Module
 * @name AppComponentModule
 * @description AppComponent module where all its dependencies load and export
 * @author Paraboly
 */
let AppComponentModule = angular
  .module("paraboly.appComponent", [])
  .component("appComponent", appComponent).name;

export default AppComponentModule;
