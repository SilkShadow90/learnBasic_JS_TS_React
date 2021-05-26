import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces/index';
// @ts-ignore
import rookWhite from '../../../../img/rook_white.svg';
// @ts-ignore
import rookBlack from '../../../../img/rook_black.svg';
import { charList, numList } from '../tools';

export default class Rook extends Figure {
  figureName = 'Rook';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => {
    const [horizontal, vertical] = this.getPosition();
    const verticalMovement: Array<[THorizontal, TVertical]> = charList
      .filter((char) => char)
      .map((char) => [char, horizontal]);
    const horizontalMovement: Array<[THorizontal, TVertical]> = numList
      .filter((num) => num < numList.length + 1)
      .map((num) => [vertical, num])
      .concat(verticalMovement);

    return horizontalMovement;
  };

  render = (): HTMLElement => this.prerender(rookWhite, rookBlack)
}
