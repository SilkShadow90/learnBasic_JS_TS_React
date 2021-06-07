import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces';
import pawnWhite from '../../../../img/pawn_white.svg';
import pawnBlack from '../../../../img/pawn_black.svg';
import Rules from '../Rules';

export default class Pawn extends Figure {
  figureName = 'Pawn';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => {
    const possiblePositions: Array<[THorizontal, TVertical]> = [];
    const currentPosition = this.getPosition();
    possiblePositions.push([currentPosition[0], (currentPosition[1] + (this.color === 'white' ? 1 : -1)) as TVertical]);

    if (currentPosition === this.startPosition) {
      possiblePositions.push([currentPosition[0], (currentPosition[1] + (this.color === 'white' ? 2 : -2)) as TVertical]);
    }

    return Rules.getAvailablePositions(possiblePositions, this.color, this.figureName, currentPosition);
  };

  render = (): HTMLElement => this.prerender(pawnWhite, pawnBlack)
}
