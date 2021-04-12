export default class CardStyle {
  /**
   * @name styleCard
   * @type {CSSStyleDeclaration}
   */
  static styleCard = {
    width: '200px',
    height: '200px',
    margin: '8px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 1px 2px rgba(55, 71, 79, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  /**
   * @name styleCardTitle
   * @type {CSSStyleDeclaration}
   */
  static styleCardTitle = {
    background: '#f3f3f3',
    boxShadow: '0px 1px 0px rgba(55, 71, 79, 0.1)',
    color: '#37474F',
    fontSize: '17px',
    fontWeight: '700',
    padding: '8px',
    textAlign: 'center',
    borderBottom: '1px solid 3e3e3e',
  };

  /**
   * @name styleCardDescription
   * @type {CSSStyleDeclaration}
   */
  static styleCardDescription = {
    color: '#37474F',
    fontSize: '13px',
    padding: '12px',
  };
}
