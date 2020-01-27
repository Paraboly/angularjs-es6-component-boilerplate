import AppComponentController from "./app.controller";
import template from "./app.html";
import "./app.scss";

let appComponent = {
  template,
  controller: AppComponentController,
  controllerAs: "$ctrl"
};

export default appComponent;
