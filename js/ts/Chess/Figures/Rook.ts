import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces/index';
// @ts-ignore
import rookWhite from '../../../../img/rook_white.svg';
// @ts-ignore
import rookBlack from '../../../../img/rook_black.svg';

export default class Rook extends Figure {
  figureName = 'Rook';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => [];
  render = (): HTMLElement => this.prerender(rookWhite, rookBlack)
}
