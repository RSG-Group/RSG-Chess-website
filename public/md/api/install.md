# Installation

```
// via NPM
npm install rsg-chess

// via Yarn
yarn add rsg-chess

// via CDN
<script src="https://storage.googleapis.com/rsg-chess-api/cdn/index.min.js">
```

#### \*More information about our CDN can be found [here](/docs/api/cdn).

#### \*RSG Chess Graphics API is published as seperate npm package.

# Set-up & usage

If you installed RSG Chess API via package manager (npm or Yarn) you need to import our scripts in your `NodeJS` or `ES6`+ code.

```
// NodeJS
const RSGChess = require('rsg-chess');
const Game = RSGChess.Game;
const Pieces = RSGChess.Pieces;
const AI = RSGChess.AI;

// your code here
```

```
// ES6 or higher
import { Game, Pieces, AI } from 'rsg-chess'

// your code here
```

If you added our scripts via CDN you will gain global variable called `RSGChess`

```
// in your .JS or .ES file
var Game = RSGChess.Game;
var Pieces = ...

// your code here
```

# What's next?

* [Create new game setup](/docs/api/game-setup)
* [Piece movement](/docs/api/piece-movement)

[<-- Back to the "Get started" API guide](/docs/api)
