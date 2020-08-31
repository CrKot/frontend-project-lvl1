import gameEngine from '../index.js';

import { random } from '../cli.js';

const greatestCommonDivisor = (num1, num2) => {
  let divisor = Math.min(num1, num2);
  while (divisor > 0) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      return divisor;
    }
    divisor -= 1;
  }
  return divisor;
};

const questions = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const num1 = random(10, 50);
  const num2 = random(50, 100);
  const messageGame = `Question: ${num1} ${num2}`;
  const trueAnswer = greatestCommonDivisor(num1, num2);
  return [messageGame, trueAnswer];
};

const runGame = () => gameEngine(questions, gameData);

export default runGame;
