import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces';
import rookWhite from '../../../../img/rook_white.svg';
import rookBlack from '../../../../img/rook_black.svg';
import { charList, numList } from '../tools';

export default class Rook extends Figure {
  figureName = 'Rook';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => {
    const [horizontal, vertical] = this.getPosition();
    const arraySearch: number = charList.indexOf(horizontal, 0);
    const possiblePositions: Array<[THorizontal, TVertical]> = [];
    numList.forEach((i) => {
      possiblePositions.push(
        [charList[arraySearch + i], vertical as TVertical],
        [charList[arraySearch], vertical + i as TVertical],
        [charList[arraySearch - i], vertical as TVertical],
        [charList[arraySearch], vertical - i as TVertical],
      );
    });

    return possiblePositions.filter(([char, num]) => charList.includes(char) && numList.includes(num));
  };

  render = (): HTMLElement => this.prerender(rookWhite, rookBlack)
}
