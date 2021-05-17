import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces/index';
// @ts-ignore
import pawnWhite from '../../../../img/pawn_white.svg';
// @ts-ignore
import pawnBlack from '../../../../img/pawn_black.svg';

export default class Pawn extends Figure {
  figureName = 'Pawn';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => [];
  render = (): HTMLElement => this.prerender(pawnWhite, pawnBlack)
}
