import { THorizontal, TVertical, TColor } from '../interfaces';

export interface IFigureDeps {
  color: TColor;
  startPosition: [THorizontal, TVertical];
  position?: [THorizontal, TVertical];
}

export default abstract class Figure {
  public readonly color: 'white' | 'black';
  protected readonly startPosition: [THorizontal, TVertical];
  private position: [THorizontal, TVertical];

  public readonly abstract figureName: string;
  public readonly abstract getNextPositionMap: () => Array<[THorizontal, TVertical]>;

  public setPosition(position: [THorizontal, TVertical]): void {
    const availablePositions: Array<[THorizontal, TVertical]> = this.getNextPositionMap();

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

  protected constructor(deps: IFigureDeps) {
    this.color = deps.color;
    this.startPosition = deps.startPosition;
    this.position = deps.position ?? deps.startPosition;
  }
}
