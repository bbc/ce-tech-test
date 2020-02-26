/* eslint class-methods-use-this: ["error", { "exceptMethods": ["hasCollided"] }] */

import TwoObjectCollision from './TwoObjectCollision';

export default class Collision {
  constructor(maxWidth, maxHeight) {
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
  }

  hasCollided(x, y) {
    return y.length
      ? y.filter((yi) => TwoObjectCollision.hasCollided(x, yi)).length > 0
      : TwoObjectCollision.hasCollided(x, y);
  }

  hasGoneOutOfBounds(cellToCheck) {
    return cellToCheck.x < 0
        || cellToCheck.x * 11 > this.maxWidth
        || cellToCheck.y < 0
        || cellToCheck.y * 11 > this.maxHeight;
  }
}
