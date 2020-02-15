//Entry for Webpack
/**
 * @type AngularJS.Module
 * @name paraboly.sandbox
 * @description Sandbox for implementing, testing and publishing new AngularJS modules
 * @author Paraboly
 */
var ParabolySandboxModule = angular
  .module("paraboly.sandbox", [])
  .component("parabolySandbox", {
    template: `Welcome to {{$ctrl.name}}`,
    controller: function() {
      this.name = "Sandbox";
    },
    controllerAs: "$ctrl"
  }).name;
