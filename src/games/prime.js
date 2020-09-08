import gameEngine from '../index.js';

import getRandomNumber from '../cli.js';

const isPrimeNumber = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getDataGame = () => {
  const number = getRandomNumber(1, 500);
  const messageToPlayer = number;
  const trueAnswer = isPrimeNumber(number) ? 'yes' : 'no';
  return [messageToPlayer, trueAnswer];
};

const runGame = () => gameEngine(descriptionGame, getDataGame);

export default runGame;
