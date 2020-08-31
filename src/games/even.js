import gameEngine from '../index.js';

import { random } from '../cli.js';

const isEven = (num) => (num % 2 === 0);

const questions = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameData = () => {
  const num = random(0, 100);
  const messageGame = `Question: ${num}`;
  const trueAnswer = (isEven(num)) ? 'yes' : 'no';
  return [messageGame, trueAnswer];
};

const runGame = () => gameEngine(questions, gameData);

export default runGame;
