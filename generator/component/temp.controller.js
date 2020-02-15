/**
 * @type AngularJS.Controller
 * @name <%= upCaseName %>Controller
 * @description <%= upCaseName %>Controller implements <%= upCaseName %>Component features
 * @since <%= date %>
 * @author Paraboly
 */
let $ctrl;
class <%= upCaseName %>Controller {
  constructor() {
    $ctrl = this;
    $ctrl.name = "<%= name %>";
  }
}

export default <%= upCaseName %>Controller;
