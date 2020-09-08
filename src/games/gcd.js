import gameEngine from '../index.js';

import getRandomNumber from '../cli.js';

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

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const getDataGame = () => {
  const num1 = getRandomNumber(10, 50);
  const num2 = getRandomNumber(50, 100);
  const messageToPlayer = `${num1} ${num2}`;
  const trueAnswer = String(getGreatestCommonDivisor(num1, num2));
  return [messageToPlayer, trueAnswer];
};

const runGame = () => gameEngine(descriptionGame, getDataGame);

export default runGame;
