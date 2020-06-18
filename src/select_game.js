import readlineSync from 'readline-sync';

import {
  isEven, calculate, gcd,
  prime, finishTheProgression,
} from './set_of_games.js';

const selectGame = () => {
  const yourAnswer = readlineSync.question('Your choice: ');
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

export default selectGame;
