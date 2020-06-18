#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { greeting } from '../src/index.js';

import {
  isEven, calculate, gcd,
  prime, finishTheProgression,
} from '../src/set_of_games.js';

greeting();

console.log(`Please select a game:
brain-even: 1
brain-calc: 2
brain-gcd: 3
brain-progression: 4
brain-prime: 5`);

const selectGame = () => {
  const yourAnswer = readlineSync.question('Your answer: ');
  switch (yourAnswer) {
    case '1':
      return isEven();
    case '2':
      return calculate();
    case '3':
      return gcd();
    case '4':
      return finishTheProgression();
    case '5':
      return prime();
    default:
      break;
  }
  return console.log('you did not choose a game =(');
};

selectGame();
