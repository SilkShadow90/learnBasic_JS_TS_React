import { TColor, THorizontal, TVertical } from '../interfaces/index';
import Figure from '../Figures/Figure';
import { charList, numList } from '../tools/index';
import Pawn from '../Figures/Pawn';

export type TFiguresPositionMap = Record<'Pawn', Figure[]>

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

  public static startFiguresPositionMap(): TFiguresPositionMap {
    const pawnGenerateProcedure = (): Figure[] => {
      const vertical: TVertical[] = [2, numList.length - 1 as TVertical];

      return new Array(charList.length * 2)
        .fill(null)
        .map((_, index) => {
          const qwe = vertical[Math.floor(index / charList.length) % vertical.length];
          const position: [THorizontal, TVertical] = [charList[index % charList.length], qwe];
          return new Pawn({ color: qwe % 2 === 0 ? 'white' : 'black', startPosition: position });
        });
    };

    return {
      Pawn: pawnGenerateProcedure(),
      // King: [['E', 1], ['E', 8]],
    };
  }
}
