const RUNNING = 'Game is running, hit sacebar to pause';
const PAUSED = 'Game is paused, hit spacebar to resume';
const LOST = 'You have lost, refresh to play again...';

class Status {
  constructor(graphics, text, status = RUNNING) {
    this._graphics = graphics;
    this._text = text;
    this._status = status;
  }

  get graphics() {
    return this._text.text;
  }

  get status() {
    return this._status;
  }

  setRunning() {
    this._status = RUNNING;
  }

  setPaused() {
    this._status = PAUSED;
  }

  setLost() {
    this._status = LOST;
  }

  draw() {
    this._text.text.text = this._status;
  }
}

export { Status, RUNNING };
