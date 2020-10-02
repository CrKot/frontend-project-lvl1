import gameEngine from '../index.js';

import getRandomNumber from '../random.js';

const getGreatestCommonDivisor = (num1, num2) => {
  let divisor = Math.min(num1, num2);
  while (divisor > 0) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      return divisor;
    }
    divisor -= 1;
  }
  return divisor;
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const num1 = getRandomNumber(10, 50);
  const num2 = getRandomNumber(50, 100);
  const gameQuestion = `${num1} ${num2}`;
  const correctAnswer = String(getGreatestCommonDivisor(num1, num2));
  return [gameQuestion, correctAnswer];
};

const runGame = () => gameEngine(gameDescription, getGameData);

export default runGame;
