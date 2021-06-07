import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces';
import rookWhite from '../../../../img/rook_white.svg';
import rookBlack from '../../../../img/rook_black.svg';
import { charList, numList } from '../tools';
import Rules from '../Rules';

export default class Rook extends Figure {
  figureName = 'Rook';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => {
    const [horizontal, vertical] = this.getPosition();
    const arraySearch: number = charList.indexOf(horizontal, 0);
    const allPossiblePositions: Array<[THorizontal, TVertical]> = [];
    numList.forEach((i) => {
      allPossiblePositions.push(
        [charList[arraySearch + i], vertical as TVertical],
        [charList[arraySearch], vertical + i as TVertical],
        [charList[arraySearch - i], vertical as TVertical],
        [charList[arraySearch], vertical - i as TVertical],
      );
    });

    const possiblePositions = allPossiblePositions.filter(([char, num]) => charList.includes(char) && numList.includes(num));

    return Rules.getAvailablePositions(possiblePositions, this.color, this.figureName, this.getPosition());
  };

  render = (): HTMLElement => this.prerender(rookWhite, rookBlack)
}
