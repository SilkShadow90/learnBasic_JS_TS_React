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
    const horizontalMovement = numList.filter((value) => value < numList.length + 1).map((value) => [currentPosition[0], value]);
    const verticalMovement = charList.filter((value) => value).map((value) => [value, currentPosition[1]]);
    const possiblePositions: Array<[THorizontal, TVertical]> = horizontalMovement.concat(verticalMovement);

    return possiblePositions;
  };

  render = (): HTMLElement => this.prerender(rookWhite, rookBlack)
}
