import Cell from '../Game/Cell.js';

export default class Food extends Cell {
  constructor(x, y, graphics) {
    super(x, y);
    this._graphics = graphics;
  }

  get graphics() {
    return this._graphics;
  }

  randomlyReposition(maxWidth, maxHeight) {
    this.x = Math.round(Math.random() * maxWidth);
    this.y = Math.round(Math.random() * maxHeight);
  }

  draw() {
    this.graphics.clear();
    this.graphics.beginFill(0xFFFFFF);
    this.graphics.drawRect(this.x * 11, this.y * 11, 10, 10);
  }
}
