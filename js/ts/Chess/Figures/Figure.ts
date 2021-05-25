import { THorizontal, TVertical, TColor } from '../interfaces';

export interface IFigureDeps {
  color: TColor;
  startPosition: [THorizontal, TVertical];
  position?: [THorizontal, TVertical];
}

export default abstract class Figure {
  public readonly color: 'white' | 'black';
  protected readonly startPosition: [THorizontal, TVertical];
  protected position: [THorizontal, TVertical];

  // todo add figure names list
  public readonly abstract figureName: string;
  protected readonly abstract getNextPositionMap: () => Array<[THorizontal, TVertical]>;
  public abstract readonly render: () => HTMLElement;

  protected readonly prerender = (white: string, black: string): HTMLElement => {
    const figureNode = document.createElement('img');
    figureNode.style.zIndex = '1';
    figureNode.draggable = true;
    figureNode.ondragstart = () => {
      const position = this.getPosition();
      const qwe = document.getElementById(position.join(''));
      qwe.style.opacity = '0.5';
    };
    figureNode.ondragend = () => {
      const position = this.getPosition();
      const qwe = document.getElementById(position.join(''));
      qwe.style.opacity = '1';
    };
    figureNode.width = 90;
    figureNode.height = 90;
    figureNode.src = this.color === 'white' ? white : black;

    return figureNode;
  };

  constructor(deps: IFigureDeps) {
    this.color = deps.color;
    this.startPosition = deps.startPosition;
    this.position = deps.position ?? deps.startPosition;
  }

  // todo add method isFigureDoNotMove(): boolean {  }
  // todo add method isFigureLocked(): boolean {  }

  public setPosition(position: [THorizontal, TVertical], isForce?: boolean): void {
    const availablePositions: Array<[THorizontal, TVertical]> = this.getNextPositionMap();

    if (isForce) {
      this.position = position;
      return;
    }

    const availablePosition: [THorizontal, TVertical] = availablePositions.find(
      ([horizontal, vertical]) => position[0] === horizontal && position[1] === vertical,
    );

    if (availablePosition) {
      this.position = availablePosition;
    }
  }

  public getPosition(): [THorizontal, TVertical] {
    return this.position;
  }

  public toSting(): string {
    return `${this.color}-${this.figureName}-${this.position.join('')}`;
  }
}