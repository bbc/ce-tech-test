export default class Text {
  constructor(x, y, text) {
    this._text = new PIXI.Text(text, { fill: 'white', fontSize: '14px', fontWeight: '100' });
    this._text.position.x = x;
    this._text.position.y = y;
  }

  get text() {
    return this._text;
  }
}
