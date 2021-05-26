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
    const currentPosition: [THorizontal, TVertical] = this.getPosition();
    const arraySearch: number = charList.indexOf(currentPosition[0], 0);
    const castling: Array<[THorizontal, TVertical]> = [
      [charList[arraySearch + 2], currentPosition[1]],
      [charList[arraySearch - 2], currentPosition[1]],
    ];
    const possiblePositions: Array<[THorizontal, TVertical]> = [
      [charList[arraySearch + 1], currentPosition[1] + 1 as TVertical],
      [charList[arraySearch + 1], currentPosition[1] - 1 as TVertical],
      [charList[arraySearch - 1], currentPosition[1] + 1 as TVertical],
      [charList[arraySearch - 1], currentPosition[1] - 1 as TVertical],
      [charList[arraySearch + 1], currentPosition[1]],
      [charList[arraySearch - 1], currentPosition[1]],
      [charList[arraySearch], currentPosition[1] + 1 as TVertical],
      [charList[arraySearch], currentPosition[1] - 1 as TVertical],
    ];

    if (currentPosition === this.startPosition) {
      possiblePositions.push(castling[0], castling[1]);
    }
    console.log(possiblePositions);
    return possiblePositions.filter(([char, num]) => char && numList.includes(num));
  };

  render = (): HTMLElement => this.prerender(kingWhite, kingBlack)
};
