# The `Game` constructor

The `Game` constructor and the "game" object are the core of all methods in RSG Chess. They are used for board set-up, piece movement, pawn promotions, special rule managment (such as [threefold repetitions](/docs/api/threefold)), initializing AI, supporting AN & FEN notations and more... The `game` object also contains special arrays and strings like [`game.board`](/docs/api/game.board), [`game.turn`](/docs/api/game.turn), [`game.threefold`](/docs/api) and [`game.FEN`](/docs/api/game.FEN).

The most functions in our API uses their prototype and you need to call them like this:

```js
   var game = new Game(promoCallback)
   ‎game.piece(...)
   ‎game.moveSelected(...)
   ‎game.simpleMovePiece(...)
   ‎game.warning(...)
   ‎// ect...
```

There is an alternative if you want just to initialize standard Chess configuration:
```js
var game = Game.prototype.initializeGame();
// retruns `new Game()` with filled game.board
```

More information about how to set up a game configuration is listed [here](/docs/api/game-setup).

### `game.board`

The `game.board` array contains 8 more arrays, and each array contains 8 values - Pieces or empty cells (`null`).
