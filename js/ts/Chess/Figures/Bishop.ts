import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces/index';
// @ts-ignore
import bishopWhite from '../../../../img/bishop_white.svg';
// @ts-ignore
import bishopBlack from '../../../../img/bishop_black.svg';

export default class Bishop extends Figure {
  figureName = 'Bishop';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => [];
  render = (): HTMLElement => this.prerender(bishopWhite, bishopBlack)
}
