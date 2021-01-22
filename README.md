# Children's & Education - Senior Software Engineer Technical Test

The technical test is a JavaScript application that ultimately produces a playable Snake game in the browser. The code is mostly modern JavaScript, Webpack and Babel with a very small amount of Canvas code at the edge. It is fully working and playable in its current state. Although the existing code is considered “legacy” as it has no tests. This tech test outlines two questions focused around safely refactoring and testing critical parts of the codebase whilst moving on to add a new feature to the game. The test is more interested in your approach to solving problems rather than the solution in itself, as such there isn’t one particular solution we’re looking for in this test.

![](https://raw.githubusercontent.com/imjacobclark/pixi-snake/master/screenshots/screenshot.png?token=AAMQZWNOARVAIKS2JJTJTZ26KO47A)

# Developing

Pixi.js, webpack, babel and Jest are used to produce this game. 

You'll need Node v13 installed.

## Building and running locally

```javascript
$ git clone git@github.com:bbc/ce-tech-test.git && cd ce-tech-test
$ npm install
$ npm run build
$ npm run serve
```

Snake will then be available at: http://localhost:8000

## Running tests

```javascript
$ npm run test
```
