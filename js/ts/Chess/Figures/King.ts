import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces/index';
// @ts-ignore
import kingWhite from '../../../../img/king_white.svg';
// @ts-ignore
import kingBlack from '../../../../img/king_black.svg';

export default class King extends Figure {
  figureName = 'King';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => [];
  render = (): HTMLElement => this.prerender(kingWhite, kingBlack)
}
