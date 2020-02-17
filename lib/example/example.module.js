import ExampleComponent from "./example.component";

/**
 * @type AngularJS.Module
 * @name ExampleModule
 * @description Example module where all its dependencies load and export
 * @since February 17, 2020 1:26 PM
 * @author Paraboly
 */
let ExampleModule = angular
  .module("example", [])
  .component("example", ExampleComponent).name;

export default ExampleModule;
