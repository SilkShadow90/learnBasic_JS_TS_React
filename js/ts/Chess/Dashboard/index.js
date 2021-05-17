import { charList, numList } from '../tools/index';
import Rules from '../Rules/index';

export default class Dashboard {
  static getChessNode() {
    return document.getElementById(Dashboard.id);
  }

  static createChessNode() {
    const chessNode = document.createElement(Dashboard.tag);
    chessNode.style.display = 'flex';
    chessNode.style.margin = 'auto';
    chessNode.style.flexDirection = 'row';
    chessNode.style.flexWrap = 'wrap';
    chessNode.style.width = '800px';
    chessNode.style.backgroundColor = 'green';
    chessNode.id = Dashboard.id;
    return chessNode;
  }

  static createFiguresInStartPositions() {
    // const chessNode: HTMLElement = Dashboard.getChessNode();
    // console.log(chessNode);
    // const qwe = new Pawn({ color: 'white', startPosition: ['A', 2] });
    const startFiguresPositionMap = Rules.startFiguresPositionMap();
    startFiguresPositionMap.Pawn.forEach((value) => {
      const pawnNode = document.getElementById(value.getPosition().join(''));
      const pawn = document.createElement('div');
      // const pawn = new Pawn('white')
      pawn.style.height = '50px';
      pawn.style.width = '50px';
      pawn.style.backgroundColor = value.color;
      pawnNode.append(value.render());
    });
  }

  // todo add static method isDashboardCompleted(): boolean {  }
  static init() {
    Dashboard.clear();
    document.body.style.width = '100vw';
    document.body.style.height = '100vh';
    document.body.style.display = 'flex';
    document.body.append(Dashboard.createChessNode());
  }

  static clear() {
    Dashboard.getChessNode()?.remove();
  }

  static render() {
    const chessNode = Dashboard.getChessNode();
    const newNumList = numList.reverse();
    const dashboard = new Array(numList.length * charList.length)
      .fill(null)
      .map((_, index) => {
        const divNode = document.createElement('div');
        const vertical = Math.floor(index / numList.length) % numList.length;
        const horizontal = index % charList.length;
        const isEven = (vertical + horizontal) % 2 === 0;
        const id = `${charList[horizontal]}${newNumList[vertical]}`;
        divNode.style.backgroundColor = isEven ? 'rgb(236, 217, 185)' : 'rgb(174, 137, 104)';
        divNode.style.height = '100px';
        divNode.style.width = '100px';
        divNode.style.justifyContent = 'center';
        divNode.style.alignItems = 'center';
        divNode.style.display = 'flex';
        divNode.id = id;
        const textNode = document.createElement('span');
        textNode.innerText = id;
        textNode.style.color = isEven ? 'black' : 'yellow';
        // divNode.append(textNode);
        return divNode;
      });
    chessNode.append(...dashboard);
    this.createFiguresInStartPositions();
  }
}
Dashboard.id = 'dashboard';
Dashboard.tag = 'div';
