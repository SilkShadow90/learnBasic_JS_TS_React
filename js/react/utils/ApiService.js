import * as data from '../resources/data.json';

export default class ApiService {
  static getTests() {
    return data.tests;
  }

  static getTest(id) {
    return data.tests.find((test) => String(test.id) === String(id));
  }
}
