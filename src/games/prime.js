import gameEngine from '../index.js';

import getRandomNumber from '../random.js';

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

const getGameData = () => {
  const gameQuestion = getRandomNumber(1, 500);
  const correctAnswer = isPrimeNumber(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const runGame = () => gameEngine(gameDescription, getGameData);

export default runGame;
