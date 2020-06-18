#!/usr/bin/env node

import { greeting } from '../src/index.js';

import selectGame from '../src/select_game.js';

greeting();

console.log(`Please select a game number:
brain-even:        '1'
brain-calc:        '2'
brain-gcd:         '3'
brain-progression: '4'
brain-prime:       '5'`);

selectGame();
