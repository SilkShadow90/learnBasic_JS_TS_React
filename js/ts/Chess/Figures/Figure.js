export default class Figure {
    constructor(deps) {
        this.color = deps.color;
        this.startPosition = deps.startPosition;
        this.position = deps.position ?? deps.startPosition;
    }
    // todo add method isFigureDoNotMove(): boolean {  }
    // todo add method isFigureLocked(): boolean {  }
    setPosition(position, isForce) {
        const availablePositions = this.getNextPositionMap();
        if (isForce) {
            this.position = position;
            return;
        }
        const availablePosition = availablePositions.find(([horizontal, vertical]) => position[0] === horizontal && position[1] === vertical);
        if (availablePosition) {
            this.position = availablePosition;
        }
    }
    getPosition() {
        return this.position;
    }
    toSting() {
        return `${this.color}-${this.figureName}-${this.position.join('')}`;
    }
}
