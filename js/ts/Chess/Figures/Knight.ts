import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces';
import knightWhite from '../../../../img/knight_white.svg';
import knightBlack from '../../../../img/knight_black.svg';
import { charList, numList } from '../tools';

export default class Knight extends Figure {
  figureName = 'Knight';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => {
    const [horizontal, vertical] = this.getPosition();
    const arraySearch = charList.indexOf(horizontal, 0);
    const possiblePositions: Array<[THorizontal, TVertical]> = [
      [charList[arraySearch + 1], vertical + 2 as TVertical],
      [charList[arraySearch + 1], vertical - 2 as TVertical],
      [charList[arraySearch - 1], vertical + 2 as TVertical],
      [charList[arraySearch - 1], vertical - 2 as TVertical],
      [charList[arraySearch + 2], vertical + 1 as TVertical],
      [charList[arraySearch + 2], vertical - 1 as TVertical],
      [charList[arraySearch - 2], vertical + 1 as TVertical],
      [charList[arraySearch - 2], vertical - 1 as TVertical],
    ];

    return possiblePositions.filter(([char, num]) => char && numList.includes(num));
  };

  render = (): HTMLElement => this.prerender(knightWhite, knightBlack)
}
