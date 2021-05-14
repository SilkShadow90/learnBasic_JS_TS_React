import { charList, numList } from '../tools/index';
import Pawn from '../Figures/Pawn';
import Rules, { TFiguresPositionMap } from '../Rules/index';

export default class Dashboard {
  private static readonly id: string = 'dashboard';
  private static readonly tag: string = 'div';

  private static getChessNode(): HTMLElement {
    return document.getElementById(Dashboard.id);
  }

  private static createChessNode(): HTMLElement {
    const chessNode: HTMLElement = document.createElement(Dashboard.tag);
    chessNode.style.display = 'flex';
    chessNode.style.margin = 'auto';
    chessNode.style.flexDirection = 'row';
    chessNode.style.flexWrap = 'wrap';
    chessNode.style.width = '800px';
    chessNode.style.backgroundColor = 'green';
    chessNode.id = Dashboard.id;

    return chessNode;
  }

  private static createFiguresInStartPositions(): void {
    // const chessNode: HTMLElement = Dashboard.getChessNode();
    // console.log(chessNode);

    // const qwe = new Pawn({ color: 'white', startPosition: ['A', 2] });
    const startFiguresPositionMap: TFiguresPositionMap = Rules.startFiguresPositionMap();

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

  public static init(): void {
    Dashboard.clear();

    document.body.style.width = '100vw';
    document.body.style.height = '100vh';
    document.body.style.display = 'flex';
    document.body.append(Dashboard.createChessNode());
  }

  public static clear(): void {
    Dashboard.getChessNode()?.remove();
  }

  public static render(): void {
    const chessNode: HTMLElement = Dashboard.getChessNode();
    const newNumList = numList.reverse();

    const dashboard: HTMLElement[] = new Array(numList.length * charList.length)
      .fill(null)
      .map((_, index) => {
        const divNode = document.createElement('div');
        const vertical: number = Math.floor(index / numList.length) % numList.length;
        const horizontal: number = index % charList.length;
        const isEven: boolean = (vertical + horizontal) % 2 === 0;
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
