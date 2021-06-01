import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces';
import bishopWhite from '../../../../img/bishop_white.svg';
import bishopBlack from '../../../../img/bishop_black.svg';
import { charList, numList } from '../tools';

export default class Bishop extends Figure {
  figureName = 'Bishop';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => {
    const [horizontal, vertical] = this.getPosition();
    const arraySearch: number = charList.indexOf(horizontal, 0);
    const possiblePositions: Array<[THorizontal, TVertical]> = [
      [charList[arraySearch + 1], vertical + 1 as TVertical],
      [charList[arraySearch + 1], vertical - 1 as TVertical],
      [charList[arraySearch - 1], vertical + 1 as TVertical],
      [charList[arraySearch - 1], vertical - 1 as TVertical],
    ];

    return possiblePositions.filter(([char, num]) => char && numList.includes(num));
  };

  render = (): HTMLElement => this.prerender(bishopWhite, bishopBlack)
}
