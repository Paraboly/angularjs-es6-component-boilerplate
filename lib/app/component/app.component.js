import AppComponentController from "./app.controller";
import template from "./app.html";
import "./app.scss";

const AppComponent = {
  template,
  controller: AppComponentController,
  controllerAs: "$ctrl"
};

export default AppComponent;
