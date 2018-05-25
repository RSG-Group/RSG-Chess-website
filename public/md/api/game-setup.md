# Intro

To create a chess board, move pieces, get best move from AI and use our Graphics you need to set-up game configuration. It contains `board` array with all pieces, `turn` array with game history, `threefold` array with history used for threefold repetition rule detection, FEN string and a lot of functions [listed here](https://github.com/RSG-Group/RSG-Chess-API#supported-functions).

## Implementation

It can be created by calling the [`Game`](/docs/api/game) constructor

```
var game = new Game()
```

That will create a blank game configuration and you need to place the pieces on the board, using the `game.piece` method. It allows you to create custom chess boards, like the ones in ["Really bad chess"](https://play.google.com/store/apps/details?id=com.noodlecake.reallybadchess), game by Noodlecake Studios Inc.

```
// Example that adds black rook on `a8` cell (x: 0, y: 0)
game.piece('rook', 0, 0, 'B')

// Syntax:
game.piece(pieceType, x, y, pieceColor)
```

Check out the docs for `game.piece` [here](/docs/api/game.piece).

> If you need standard chess configuration use `Game.prototype.initializeGame()`

Example:

```
var game = Game.prototype.initializeGame();
// retruns `new Game()` with filled game.board
```

> Once your game configuration is ready you can move the pieces around the board. Check out the [piece movement](/docs/api/piece-movement) article for more information.

## Demo

<iframe src="https://codesandbox.io/embed/8y91jz80wj?view=split" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

[<-- Back to the "Get started" API guide](/docs/api)
