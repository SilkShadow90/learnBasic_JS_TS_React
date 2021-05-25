import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces/index';
// @ts-ignore
import knightWhite from '../../../../img/knight_white.svg';
// @ts-ignore
import knightBlack from '../../../../img/knight_black.svg';
import { charList, numList } from '../tools';

export default class Knight extends Figure {
  figureName = 'Knight';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => {
    const currentPosition = this.getPosition();
    const arraySearch = charList.indexOf(currentPosition[0], 0);
    const possiblePositions: Array<[THorizontal, TVertical]> = [
      [charList[arraySearch + 1], currentPosition[1] + 2 as TVertical],
      [charList[arraySearch + 1], currentPosition[1] - 2 as TVertical],
      [charList[arraySearch - 1], currentPosition[1] + 2 as TVertical],
      [charList[arraySearch - 1], currentPosition[1] - 2 as TVertical],
      [charList[arraySearch + 2], currentPosition[1] + 1 as TVertical],
      [charList[arraySearch + 2], currentPosition[1] - 1 as TVertical],
      [charList[arraySearch - 2], currentPosition[1] + 1 as TVertical],
      [charList[arraySearch - 2], currentPosition[1] - 1 as TVertical],
    ];

    return possiblePositions.filter(([char, num]) => char && numList.includes(num));
  };

  render = (): HTMLElement => this.prerender(knightWhite, knightBlack)
}
