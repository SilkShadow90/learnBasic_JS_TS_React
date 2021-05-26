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
    const currentPosition: [THorizontal, TVertical] = this.getPosition();
    const verticalMovement: Array<[THorizontal, TVertical]> = charList.filter((THorizontal) => THorizontal)
      .map((THorizontal) => [THorizontal, currentPosition[1]]);
    const horizontalMovement: Array<[THorizontal, TVertical]> = numList.filter((TVertical) => TVertical < numList.length + 1)
      .map((TVertical) => [currentPosition[0], TVertical]
      .concat(verticalMovement));

    return horizontalMovement;
  };

  render = (): HTMLElement => this.prerender(rookWhite, rookBlack)
}
