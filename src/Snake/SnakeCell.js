import Cell from '../Game/Cell';

export default class SnakeCell extends Cell {
  incrementX() {
    this.x += 1;
  }

  decrementX() {
    this.x -= 1;
  }

  incrementY() {
    this.y += 1;
  }

  decrementY() {
    this.y -= 1;
  }
}
