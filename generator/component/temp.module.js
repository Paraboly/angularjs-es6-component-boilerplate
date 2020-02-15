import angular from "angular";
import <%= upCaseName %>Component from "./<%= dashedName %>.component";

/**
 * @type AngularJS.Module
 * @name <%= upCaseName %>Module
 * @description <%= upCaseName %> module where all its dependencies load and export
 * @since <%= date %>
 * @author Paraboly
 */
let <%= upCaseName %>Module = angular.module('<%= name %>', [
])
.component("<%= lowCaseName %>", <%= upCaseName %>Component).name;

export default <%= upCaseName %>Module;
