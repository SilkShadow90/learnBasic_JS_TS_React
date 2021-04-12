import CardStyle from './CardStyle';
import Tools from '../../Tools';

export default class Card {
  /**
   * @type HTMLDivElement
   */
  cardNode;

  /**
   * @param deps {{ title: string, description: string }}
   */
  constructor(deps) {
    this.saveDeps(deps);
    this.createCardNode();
    this.setTitle('title');
    this.setTitle('description');
  }

  /**
   * @param deps {{[p:string]: number } | ArrayLike<string>}
   *
   * @return void
   */
  saveDeps(deps) {
    Object.entries(deps).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  createCardNode() {
    this.cardNode = document.createElement('div');

    Tools.setStyle(this.cardNode, CardStyle.styleCard);
  }

  setTitle(name = 'title', style) {
    let titleNode = this.cardNode.getElementsByClassName(name)?.[0];

    if (titleNode) {
      Tools.setStyle(titleNode, style);
      return;
    }

    titleNode = document.createElement('div');

    titleNode.innerText = this[name];
    titleNode.classList.add(name);

    Tools.setStyle(titleNode, CardStyle[`styleCard${name[0].toUpperCase()}${name.slice(1)}`]);

    this.cardNode.append(titleNode);
  }
}
