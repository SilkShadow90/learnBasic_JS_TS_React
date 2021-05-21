import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces/index';
// @ts-ignore
import pawnWhite from '../../../../img/pawn_white.svg';
// @ts-ignore
import pawnBlack from '../../../../img/pawn_black.svg';

export default class Pawn extends Figure {
  figureName = 'Pawn';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => {
    const possiblePositions: Array<[THorizontal, TVertical]> = [];
    const currentPosition = this.getPosition();
    possiblePositions.push([currentPosition[0], (currentPosition[1] + this.color === 'white' ? 1 : -1) as TVertical]);

    if (currentPosition === this.startPosition) {
      possiblePositions.push([currentPosition[0], (currentPosition[1] + this.color === 'white' ? 2 : -2) as TVertical]);
    }

    return possiblePositions;
  };

  render = (): HTMLElement => this.prerender(pawnWhite, pawnBlack)
}
