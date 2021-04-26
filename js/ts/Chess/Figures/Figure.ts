import { THorizontal, TVertical } from '../interfaces';

export interface IFigureDeps {
  color: 'white' | 'black';
  startPosition: [THorizontal, TVertical];
  position?: [THorizontal, TVertical];
}

export default class Figure {
  color: 'white' | 'black';

  startPosition: [THorizontal, TVertical];

  position: [THorizontal, TVertical];

  constructor(deps: IFigureDeps) {
    this.color = deps.color;
    this.startPosition = deps.startPosition;
    this.position = deps.position ?? deps.startPosition;
  }
}
