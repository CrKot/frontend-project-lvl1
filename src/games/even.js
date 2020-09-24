import gameEngine from '../index.js';

import getRandomNumber from '../getRandom.js';

const isEven = (num) => (num % 2 === 0);

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getDataGame = () => {
  const num = getRandomNumber(0, 100);
  const gameQuestion = num;
  const correctAnswer = (isEven(num)) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const runGame = () => gameEngine(gameDescription, getDataGame);

export default runGame;
