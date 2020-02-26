export default class TwoObjectCollision {
  static hasCollided(objectOne, objectTwo) {
    return objectOne.x === objectTwo.x && objectOne.y === objectTwo.y;
  }
}
