import * as PIXI from 'pixi.js';
import * as PIXISound from 'pixi-sound';

import Snake from './Snake/Snake';
import Food from './Food/Food';
import Controls from './Game/Controls';
import Text from './Game/Text';
import Collision from './Collision/Collision';
import { Status, RUNNING } from './Game/Status';

window.PIXI = PIXI;
window.PIXISound = PIXISound;
window.window.PIXI.sound = PIXISound.default;

const ONE_BLOCK_IN_PIXELS = 10;
const SCREEN_OUT_OF_BOUNDS_OFFSET = 1;
const DIED_SOUND = window.PIXI.sound.Sound.from('./resources/sounds/died.mp3');
const EAT_SOUND = window.PIXI.sound.Sound.from('./resources/sounds/eat.mp3');

const collision = new Collision(window.innerWidth, window.innerHeight);
const snake = new Snake(new window.PIXI.Graphics(), collision);
const food = new Food(20, 20, new window.PIXI.Graphics());
const status = new Status(new window.PIXI.Graphics(), new Text('', window.innerHeight - 30, 20));

new Controls(snake, status).create();

const snakeApplication = new window.PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
  transparent: false,
  resolution: 1,
});

window.PIXI.Ticker.maxFPS = 1;
snakeApplication.ticker.maxFPS = 1;

document.body.appendChild(snakeApplication.view);

snakeApplication.ticker.add(() => {
  if (snake.hasCollidedWithSelf() || snake.hasGoneOutOfBounds()) {
    if (status.status === RUNNING) {
      DIED_SOUND.play();
      snake.flash();
    }

    status.setLost();

    return;
  }

  if (collision.hasCollided(snake.cells[0], food)) {
    EAT_SOUND.play();
    snake.grow();

    food.randomlyReposition(
      window.innerWidth / (ONE_BLOCK_IN_PIXELS + SCREEN_OUT_OF_BOUNDS_OFFSET),
      window.innerHeight / (ONE_BLOCK_IN_PIXELS + SCREEN_OUT_OF_BOUNDS_OFFSET),
    );
  }

  if (status.status === RUNNING) {
    snake.move();
  }

  snake.draw();
  food.draw();
  status.draw();
});

snakeApplication.stage.addChild(snake.graphics);
snakeApplication.stage.addChild(food.graphics);
snakeApplication.stage.addChild(status.graphics);
