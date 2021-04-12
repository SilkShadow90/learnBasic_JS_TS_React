import CookiesLibrary from 'universal-cookie';

export default class Cookies {
  static cookies;

  static init() {
    Cookies.cookies = new CookiesLibrary();
  }

  static getInstance() {
    if (Cookies.cookies) {
      return Cookies.cookies;
    }

    Cookies.init();
    return Cookies.getInstance();
  }
}
