import angular from "angular";
import "normalize.css";
import AppComponentModule from "./component/app.module";

angular
  .module("paraboly.sandbox", [AppComponentModule])
  .config($locationProvider => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix("!");
  });
