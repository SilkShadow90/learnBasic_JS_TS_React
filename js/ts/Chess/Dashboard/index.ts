export default class Dashboard {
  private static readonly id: string = 'dashboard';
  private static readonly tag: string = 'div';

  private static getChessNode(): HTMLElement {
    return document.getElementById(Dashboard.id);
  }

  private static createChessNode(): HTMLElement {
    const chessNode: HTMLElement = document.createElement(Dashboard.tag);
    chessNode.id = Dashboard.id;

    return chessNode;
  }

  // todo add static method createFiguresInStartPositions(): void {  }
  // todo add static method isDashboardCompleted(): boolean {  }

  public static init(): void {
    Dashboard.clear();

    document.body.append(Dashboard.createChessNode());
  }

  public static clear(): void {
    Dashboard.getChessNode()?.remove();
  }

  public static render(): void {
    const chessNode: HTMLElement = Dashboard.getChessNode();
    // todo release render
    chessNode.innerText = Dashboard.id;
  }
}
