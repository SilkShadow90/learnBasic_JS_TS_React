import { charList, numList } from '../tools';
import Rules, { TFiguresPositionMap } from '../Rules/index';
import Figure from '../Figures/figure';
import { THorizontal, TVertical } from '../interfaces';

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
    chessNode.style.width = `${numList.length * 100}px`;
    chessNode.style.backgroundColor = 'green';
    chessNode.id = Dashboard.id;

    return chessNode;
  }

  public static getAllFiguresOfDashboard() {
    return document.getElementsByClassName('figure');
  }

  private static createFiguresInStartPositions(): void {
    const startFiguresPositionMap: TFiguresPositionMap = Rules.startFiguresPositionMap();

    Object.entries(startFiguresPositionMap).forEach(([key, value]) => {
      value.forEach((element: Figure) => {
        Rules.figurePositionsMap[element.getPosition().join('')] = element;
        const figureNode = document.getElementById(element.getPosition().join(''));
        const figure = document.createElement('div');

        figure.style.height = '50px';
        figure.style.width = '50px';
        figure.style.backgroundColor = element.color;

        figureNode.append(element.render.call(element));
      });
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
        const availableId = `AP-${id}`;

        divNode.style.backgroundColor = isEven ? 'rgb(236, 217, 185)' : 'rgb(174, 137, 104)';
        divNode.style.height = '100px';
        divNode.style.width = '100px';
        divNode.style.justifyContent = 'center';
        divNode.style.alignItems = 'center';
        divNode.style.display = 'flex';
        divNode.style.position = 'relative';
        divNode.id = id;

        divNode.ondragover = (ev) => {
          ev.preventDefault();
        };

        divNode.ondrop = (event) => {
          const prevPosition: string = event.dataTransfer.getData('text');
          const qwe = document.getElementById(prevPosition);
          qwe.style.opacity = '1';
          if (event.target.id === availableId) {
            const nextPosition: string = event.target.id.replace(/^\w+-(\w+)$/, '$1');
            const figure: Figure = Rules.figurePositionsMap[prevPosition];

            figure.setPosition(nextPosition.split('') as [THorizontal, TVertical]);
          }
        };

        const kruzok = document.createElement('div');
        kruzok.classList.add('availablePosition');
        kruzok.style.height = '100px';
        kruzok.style.width = '100px';
        kruzok.style.position = 'absolute';
        kruzok.style.zIndex = '100001';
        kruzok.style.opacity = '0.6';
        kruzok.id = availableId;
        kruzok.hidden = true;
        kruzok.style.justifyContent = 'center';
        kruzok.style.alignItems = 'center';
        kruzok.style.display = 'flex';

        divNode.append(kruzok);

        const kruzokVKruzke = document.createElement('div');
        kruzokVKruzke.style.height = '30px';
        kruzokVKruzke.style.width = '30px';
        kruzokVKruzke.style.backgroundColor = 'green';
        kruzokVKruzke.style.borderRadius = '15px';
        kruzok.append(kruzokVKruzke);

        function cletka():Record<'justifyContent' | 'alignItems', 'flex-start' | 'flex-end' | 'center'>[] {
          if (!vertical && !horizontal) {
            return [{ justifyContent: 'flex-end', alignItems: 'flex-start' }, { justifyContent: 'flex-start', alignItems: 'flex-end' }];
          }
          if (!vertical && horizontal === 7) {
            return [{ justifyContent: 'flex-end', alignItems: 'flex-start' }, { justifyContent: 'flex-end', alignItems: 'flex-start' }];
          }
          if (!horizontal && vertical === 7) {
            return [{ justifyContent: 'flex-start', alignItems: 'flex-end' }, { justifyContent: 'flex-start', alignItems: 'flex-end' }];
          }
          if (horizontal === 7 && vertical === 7) {
            return [{ justifyContent: 'flex-start', alignItems: 'flex-end' }, { justifyContent: 'flex-end', alignItems: 'flex-start' }];
          }

          return undefined;
        }

        function ugl(): Record<'justifyContent' | 'alignItems', 'flex-start' | 'flex-end' | 'center'> {
          if (!vertical) {
            return { justifyContent: 'flex-end', alignItems: 'flex-start' };
          }
          if (vertical === 7) {
            return { justifyContent: 'flex-start', alignItems: 'flex-end' };
          }
          if (!horizontal) {
            return { justifyContent: 'flex-start', alignItems: 'flex-end' };
          }
          if (horizontal === 7) {
            return { justifyContent: 'flex-end', alignItems: 'flex-start' };
          }
          return { justifyContent: 'flex-start', alignItems: 'flex-start' };
        }
        const kromka: boolean = !vertical || !horizontal || horizontal === 7 || vertical === 7;
        const kromkali: boolean = (!vertical && !horizontal)
        || (!vertical && horizontal === 7)
        || (!horizontal && vertical === 7)
        || (horizontal === 7 && vertical === 7);

        if (kromka && !kromkali) {
          const textNode = document.createElement('span');
          const divvNode = document.createElement('div');

          divvNode.style.height = '100px';
          divvNode.style.width = '100px';
          divvNode.style.justifyContent = ugl().justifyContent;
          divvNode.style.alignItems = ugl().alignItems;
          divvNode.style.display = 'flex';
          divvNode.style.position = 'absolute';
          divvNode.append(textNode);

          textNode.innerText = !vertical || vertical === 7 ? `${charList[horizontal].toLowerCase()}` : `${newNumList[vertical]}`;
          textNode.style.color = isEven ? 'rgb(174, 137, 104)' : 'rgb(236, 217, 185)';

          divNode.append(divvNode);
        }

        if (kromkali) {
          const charNode = document.createElement('span');
          const numNode = document.createElement('span');
          const divvNode = document.createElement('div');
          const divvNode2 = document.createElement('div');

          divvNode.style.height = '100px';
          divvNode.style.width = '100px';
          divvNode.style.justifyContent = cletka()[0].justifyContent;
          divvNode.style.alignItems = cletka()[0].alignItems;
          divvNode.style.display = 'flex';
          divvNode.style.position = 'absolute';
          divvNode.append(charNode);

          divvNode2.style.height = '100px';
          divvNode2.style.width = '100px';
          divvNode2.style.justifyContent = cletka()[1].justifyContent;
          divvNode2.style.alignItems = cletka()[1].alignItems;
          divvNode2.style.display = 'flex';
          divvNode2.style.position = 'absolute';
          divvNode2.append(numNode);

          charNode.innerText = !vertical || vertical === 7 ? `${charList[horizontal].toLowerCase()}` : `${newNumList[vertical]}`;
          charNode.style.color = isEven ? 'rgb(174, 137, 104)' : 'rgb(236, 217, 185)';
          charNode.style.marginRight = !vertical && horizontal === 7 ? '8px' : '0';
          charNode.style.marginLeft = !horizontal && vertical === 7 ? '8px' : '0';

          numNode.innerText = `${newNumList[vertical]}`;
          numNode.style.color = isEven ? 'rgb(174, 137, 104)' : 'rgb(236, 217, 185)';

          divNode.append(divvNode, divvNode2);
        }

        return divNode;
      });

    chessNode.append(...dashboard);

    this.createFiguresInStartPositions();
  }

  public static clearAvailablePosition(positions: Array<[THorizontal, TVertical]>): void {
    positions.forEach((position: [THorizontal, TVertical]) => {
      const positionsNode = document.getElementById(`AP-${position.join('')}`);
      positionsNode.hidden = true;
    });
  }

  public static renderAvailablePosition(positions: Array<[THorizontal, TVertical]>): void {
    positions.forEach((position: [THorizontal, TVertical]) => {
      const positionsNode = document.getElementById(`AP-${position.join('')}`);
      positionsNode.hidden = false;
    });
  }

  public static newRenderPosition(prevPosition:[THorizontal, TVertical], newPosition:[THorizontal, TVertical]):void {
    const i: HTMLElement = document.getElementById(prevPosition.join(''));
    const y: HTMLElement = document.getElementById(newPosition.join(''));
    const figure = i.getElementsByClassName('figure')?.[0];

    const figure1 = y.getElementsByClassName('figure')?.[0];
    figure1?.remove();
    y.append(figure);
  }
}
