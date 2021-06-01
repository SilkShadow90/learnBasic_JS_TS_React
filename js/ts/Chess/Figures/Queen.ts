import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces';
import queenWhite from '../../../../img/queen_white.svg';
import queenBlack from '../../../../img/queen_black.svg';

export default class Queen extends Figure {
  figureName = 'Queen';
  getNextPositionMap = (): Array<[THorizontal, TVertical]> => [];
  render = (): HTMLElement => this.prerender(queenWhite, queenBlack)
}
