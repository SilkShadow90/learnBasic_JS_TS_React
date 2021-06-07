import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces';
import kingWhite from '../../../../img/king_white.svg';
import kingBlack from '../../../../img/king_black.svg';
import { charList, numList } from '../tools';
import Rules from '../Rules';

export default class King extends Figure {
  figureName = 'King';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => {
    const [horizontal, vertical] = this.getPosition();
    const arraySearch: number = charList.indexOf(horizontal, 0);
    const castling: Array<[THorizontal, TVertical]> = [
      [charList[arraySearch + 2], vertical],
      [charList[arraySearch - 2], vertical],
    ];
    const allPossiblePositions: Array<[THorizontal, TVertical]> = [
      [charList[arraySearch + 1], vertical + 1 as TVertical],
      [charList[arraySearch + 1], vertical - 1 as TVertical],
      [charList[arraySearch - 1], vertical + 1 as TVertical],
      [charList[arraySearch - 1], vertical - 1 as TVertical],
      [charList[arraySearch + 1], vertical],
      [charList[arraySearch - 1], vertical],
      [charList[arraySearch], vertical + 1 as TVertical],
      [charList[arraySearch], vertical - 1 as TVertical],
    ];

    if (this.getPosition() === this.startPosition) {
      allPossiblePositions.push(...castling);
    }

    const possiblePositions = allPossiblePositions.filter(([char, num]) => charList.includes(char) && numList.includes(num));

    return Rules.getAvailablePositions(possiblePositions, this.color, this.figureName, this.getPosition());
  };

  render = (): HTMLElement => this.prerender(kingWhite, kingBlack)
};
