import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces/index';
// @ts-ignore
import knightWhite from '../../../../img/knight_white.svg';
// @ts-ignore
import knightBlack from '../../../../img/knight_black.svg';

export default class Knight extends Figure {
  figureName = 'Knight';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => [];
  render = (): HTMLElement => this.prerender(knightWhite, knightBlack)
}
