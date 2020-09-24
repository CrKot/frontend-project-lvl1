import gameEngine from '../index.js';

import getRandomNumber from '../getRandom.js';

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

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getDataGame = () => {
  const number = getRandomNumber(1, 500);
  const gameQuestion = number;
  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const runGame = () => gameEngine(gameDescription, getDataGame);

export default runGame;
