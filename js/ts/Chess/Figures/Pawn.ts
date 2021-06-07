import Figure, { IFigureDeps } from './Figure';
import { THorizontal, TVertical } from '../interfaces';
import pawnWhite from '../../../../img/pawn_white.svg';
import pawnBlack from '../../../../img/pawn_black.svg';
import Rules from '../Rules';
import { numList } from '../tools';

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

  render = (): HTMLElement => this.prerender(pawnWhite, pawnBlack);

  setPosition(position: [THorizontal, TVertical], isForce?: boolean): void {
    super.setPosition(position, isForce);

    if (+position[1] === numList[0] || +position[1] === numList.slice(-1)[0]) {
      // const vibor = document.createElement('div');
      // vibor.classList.add('availablePosition');
      // vibor.style.height = '100px';
      // vibor.style.width = '100px';
      // vibor.style.position = 'absolute';
      // vibor.style.zIndex = '100001';
      // vibor.style.opacity = '0.6';
      // // vibor.id = availableId;
      // vibor.hidden = true;
      // vibor.style.justifyContent = 'center';
      // vibor.style.alignItems = 'center';
      // vibor.style.display = 'flex';
      // vibor.style.color = 'red';
      //
      // console.log(vibor);
    }
  }
}
