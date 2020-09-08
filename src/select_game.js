import readlineSync from 'readline-sync';

import {
  brainEvenGame, brainCalcGame, brainGcdGame,
  brainPrimeGame, brainProgressionGame,
} from './set_of_games.js';

const selectGame = () => {
  const yourAnswer = readlineSync.question('Your choice: ');
  switch (yourAnswer) {
    case '1':
      return brainEvenGame();
    case '2':
      return brainCalcGame();
    case '3':
      return brainGcdGame();
    case '4':
      return brainProgressionGame();
    case '5':
      return brainPrimeGame();
    default:
      break;
  }
  return console.log('you did not choose a game =(');
};

export default selectGame;
