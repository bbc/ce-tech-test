# BBC Children's & Education - Senior Engineer Technical Test

## Overview
We have a codebase that produces a classic Snake game, it is written in Pixi, JavaScript, webpack and babel and can be played with directly in a web browser.

The classic Snake game gives the player the ability to control a snake around the screen with the right, left, up and down arrows, eating food and avoiding hitting the walls or the snakes body. The snake grows after each piece of eaten food, the longer you play the harder the game becomes as the ever growing snake body becomes hard to maneuver around!

### Rules:
* Left, Right, Up and Down controls
* Do not collide any sides of the screen
* Do not collide with the snakes body
* Eat the food as it appears around the screen

## Tasks

We have identified the following tasks which we would like you to think about ahead of the interview. Please consider how you might approach these problems so that you are ready to pair with one of our developers on a solution during the interview.

### Task 1
The game currently has no tests assosiated with it, the project is pre-configured with a Jest configuration. Your task is to begin refactoring and testing the most critical part of the application, the Snake and SnakeCell classes which are responsible for ensuring the snake can move around the screen.

### Task 2
We have had player feedback that players wish to see how many pieces of food they have eaten as they progress the game. We would like to extend the game so that this score appears at the bottom right hand side of the screen. The score will show exactly how many pieces of food the snake has eaten.
