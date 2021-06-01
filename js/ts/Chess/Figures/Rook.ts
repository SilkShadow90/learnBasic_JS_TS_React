import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces';
import rookWhite from '../../../../img/rook_white.svg';
import rookBlack from '../../../../img/rook_black.svg';
import { charList, numList } from '../tools';

export default class Rook extends Figure {
  figureName = 'Rook';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => {
    const [horizontal, vertical] = this.getPosition();
    const verticalMovement: Array<[THorizontal, TVertical]> = charList
      .filter((char) => char)
      .map((char) => [char, vertical]);
    const horizontalMovement: Array<[THorizontal, TVertical]> = numList
      .filter((num) => num <= numList.length)
      .map((num) => [horizontal, num])
      .concat(verticalMovement);

    return horizontalMovement;
  };

  render = (): HTMLElement => this.prerender(rookWhite, rookBlack)
}
