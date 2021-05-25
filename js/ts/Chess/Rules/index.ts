import { TColor, THorizontal, TVertical } from '../interfaces/index';
import Figure from '../Figures/Figure';
import { charList, numList } from '../tools/index';
import Pawn from '../Figures/Pawn';
import King from '../Figures/King';
import Queen from '../Figures/Queen';
import Bishop from '../Figures/Bishop';
import Knight from '../Figures/Knight';
import Rook from '../Figures/Rook';

export type TFiguresPositionMap = Record<'Pawn' | 'King' | 'Queen' | 'Bishop' | 'Knight' | 'Rook', Figure[]>

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
      King: [
        new King({ color: 'white', startPosition: ['E', 1] }),
        new King({ color: 'black', startPosition: ['E', 8] }),
      ],
      Queen: [
        new Queen({ color: 'white', startPosition: ['D', 1] }),
        new Queen({ color: 'black', startPosition: ['D', 8] }),
      ],
      Bishop: [
        new Bishop({ color: 'white', startPosition: ['C', 1] }),
        new Bishop({ color: 'white', startPosition: ['F', 1] }),
        new Bishop({ color: 'black', startPosition: ['C', 8] }),
        new Bishop({ color: 'black', startPosition: ['F', 8] }),
      ],
      Knight: [
        new Knight({ color: 'white', startPosition: ['B', 1] }),
        new Knight({ color: 'white', startPosition: ['G', 1] }),
        new Knight({ color: 'black', startPosition: ['B', 8] }),
        new Knight({ color: 'black', startPosition: ['G', 8] }),
      ],
      Rook: [
        new Rook({ color: 'white', startPosition: ['A', 1] }),
        new Rook({ color: 'white', startPosition: ['H', 1] }),
        new Rook({ color: 'black', startPosition: ['A', 8] }),
        new Rook({ color: 'black', startPosition: ['H', 8] }),
      ],
    };
  }
}