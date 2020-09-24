import readlineSync from 'readline-sync';

import {
  brainEvenGame, brainCalcGame, brainGcdGame,
  brainPrimeGame, brainProgressionGame,
} from './set_of_games.js';

import listOfGames from './list_of_games.js';

import gameEngine from './index.js';

const selectGame = () => {
  const getName = gameEngine(null, null);
  listOfGames();
  const yourAnswer = readlineSync.question('Your choice: ');
  switch (yourAnswer) {
    case '1':
      return brainEvenGame(getName);
    case '2':
      return brainCalcGame(getName);
    case '3':
      return brainGcdGame(getName);
    case '4':
      return brainProgressionGame(getName);
    case '5':
      return brainPrimeGame(getName);
    default:
      break;
  }
  return console.log('you did not choose a game =(');
};

export default selectGame;
