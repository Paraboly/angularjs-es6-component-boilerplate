import ExampleModule from './example';
import ExampleController from './example.controller';
import ExampleComponent from './example.component';
import ExampleTemplate from './example.html';

describe('Example', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ExampleModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ExampleController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ExampleTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ExampleComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ExampleTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ExampleController);
    });
  });
});
