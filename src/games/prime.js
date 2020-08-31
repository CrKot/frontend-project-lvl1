import gameEngine from '../index.js';

import { random } from '../cli.js';

const isPrimeNumber = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const questions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameData = () => {
  const number = random(1, 500);
  const messageGame = `Question: ${number}`;
  const trueAnswer = isPrimeNumber(number) ? 'yes' : 'no';
  return [questions, messageGame, trueAnswer];
};

const runGame = () => gameEngine(questions, gameData);

export default runGame;
