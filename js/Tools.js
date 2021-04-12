export default class Tools {
  /**
   *
   * @param node {HTMLDivElement}
   * @param styleObject {CSSStyleDeclaration}
   *
   * @return void
   */
  static setStyle(node, styleObject) {
    const localNode = node;

    Object.entries(styleObject).forEach(([key, value]) => {
      localNode.style[key] = value;
    });
  }
}
