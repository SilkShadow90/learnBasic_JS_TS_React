import Dashboard from '../routes/Dashboard';
import Auth from '../routes/Auth';
import Tests from '../routes/Tests';
import Test from '../routes/Test';

class Route {
  constructor(component, isNavVisible = true) {
    const url = `/${component?.name?.toLowerCase()}`;
    const params = Array.isArray(component.params)
      ? component.params.map((param) => `/:${param}`).join('')
      : '';
    this.path = url + params;
    this.name = component?.name;
    this.localeName = component?.localeName;
    this.component = component;
    this.isNavVisible = isNavVisible;
  }

  getName() {
    return this?.localeName || this?.name;
  }
}

const routeMap = {
  auth: new Route(Auth, false),
  dashboard: new Route(Dashboard),
  tests: new Route(Tests),
  test: new Route(Test, false),
};

export default routeMap;
