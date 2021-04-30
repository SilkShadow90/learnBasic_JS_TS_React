import { TColor, THorizontal, TVertical } from '../interfaces/index';
import Figure from '../Figures/Figure';

export default class Rules {
  private static turnColor: TColor = 'white';

  public static getColorTurn(): TColor {
    return Rules.turnColor;
  }

  private static switchColorTurn(): void {
    Rules.turnColor = Rules.turnColor === 'white' ? 'black' : 'white';
  }

  public static setAnotherFigurePosition(figure: Figure, newPosition: [THorizontal, TVertical]): void {
    figure.setPosition(newPosition, true);
  }
}
