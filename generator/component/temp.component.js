import template from "./<%= dashedName %>.html";
import controller from "./<%= dashedName %>.controller";
import "./<%= dashedName %>.scss";
/**
 * @type AngularJS Component
 * @name <%= upCaseName %>Component
 * @description <%= upCaseName %>Component
 * @since <%= date %>
 * @author Paraboly
 */


const <%= upCaseName %>Component = {
	bindings: {},
	template,
	controller,
	controllerAs: "$ctrl"
};

export default <%= upCaseName %>Component;

