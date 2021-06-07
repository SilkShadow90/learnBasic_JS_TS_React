import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces';
import knightWhite from '../../../../img/knight_white.svg';
import knightBlack from '../../../../img/knight_black.svg';
import { charList, numList } from '../tools';
import Rules from '../Rules';

export default class Knight extends Figure {
  figureName = 'Knight';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => {
    const [horizontal, vertical] = this.getPosition();
    const arraySearch = charList.indexOf(horizontal, 0);
    const allPossiblePositions: Array<[THorizontal, TVertical]> = [
      [charList[arraySearch + 1], vertical + 2 as TVertical],
      [charList[arraySearch + 1], vertical - 2 as TVertical],
      [charList[arraySearch - 1], vertical + 2 as TVertical],
      [charList[arraySearch - 1], vertical - 2 as TVertical],
      [charList[arraySearch + 2], vertical + 1 as TVertical],
      [charList[arraySearch + 2], vertical - 1 as TVertical],
      [charList[arraySearch - 2], vertical + 1 as TVertical],
      [charList[arraySearch - 2], vertical - 1 as TVertical],
    ];

    const possiblePositions = allPossiblePositions.filter(([char, num]) => charList.includes(char) && numList.includes(num));

    return Rules.getAvailablePositions(possiblePositions, this.color, this.figureName, this.getPosition());
  };

  render = (): HTMLElement => this.prerender(knightWhite, knightBlack)
}
