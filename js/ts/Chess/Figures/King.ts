import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces/index';
// @ts-ignore
import kingWhite from '../../../../img/king_white.svg';
// @ts-ignore
import kingBlack from '../../../../img/king_black.svg';
import { charList, numList } from '../tools';

export default class King extends Figure {
  figureName = 'King';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => {
    const [horizontal, vertical] = this.getPosition();
    const arraySearch: number = charList.indexOf(horizontal, 0);
    const castling: Array<[THorizontal, TVertical]> = [
      [charList[arraySearch + 2], vertical],
      [charList[arraySearch - 2], vertical],
    ];
    const possiblePositions: Array<[THorizontal, TVertical]> = [
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
      possiblePositions.push(...castling);
    }

    return possiblePositions.filter(([char, num]) => char && numList.includes(num));
  };

  render = (): HTMLElement => this.prerender(kingWhite, kingBlack)
};
