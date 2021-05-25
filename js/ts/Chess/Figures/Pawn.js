import Figure from './Figure';
// @ts-ignore
import pawnWhite from '../../../../img/pawn_white.svg';
// @ts-ignore
import pawnBlack from '../../../../img/pawn_black.svg';
export default class Pawn extends Figure {
    constructor() {
        super(...arguments);
        this.figureName = 'Pawn';
        this.getNextPositionMap = () => [];
        this.render = () => {
            const pawnNode = document.createElement('img');
            pawnNode.draggable = true;
            pawnNode.ondragstart = () => {
                const position = this.getPosition();
                const qwe = document.getElementById(position.join(''));
                qwe.style.opacity = '0.5';
            };
            pawnNode.ondragend = () => {
                const position = this.getPosition();
                const qwe = document.getElementById(position.join(''));
                qwe.style.opacity = '1';
            };
            pawnNode.width = 90;
            pawnNode.height = 90;
            pawnNode.src = this.color === 'white' ? pawnWhite : pawnBlack;
            return pawnNode;
        };
    }
}