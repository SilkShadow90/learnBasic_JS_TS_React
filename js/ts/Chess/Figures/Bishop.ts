import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces/index';
// @ts-ignore
import bishopWhite from '../../../../img/bishop_white.svg';
// @ts-ignore
import bishopBlack from '../../../../img/bishop_black.svg';
import { charList, numList } from '../tools';

export default class Bishop extends Figure {
  figureName = 'Bishop';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => {
    const [firstName, surName] = this.getPosition();
    const arraySearch: number = charList.indexOf(firstName, 0);
    const possiblePositions: Array<[THorizontal, TVertical]> = [
      [charList[arraySearch + 1], surName + 1 as TVertical],
      [charList[arraySearch + 1], surName - 1 as TVertical],
      [charList[arraySearch - 1], surName + 1 as TVertical],
      [charList[arraySearch - 1], surName - 1 as TVertical],
    ];

    return possiblePositions.filter(([char, num]) => char && numList.includes(num));
  };

  render = (): HTMLElement => this.prerender(bishopWhite, bishopBlack)
}
