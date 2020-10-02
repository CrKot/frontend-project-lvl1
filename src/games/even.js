import gameEngine from '../index.js';

import getRandomNumber from '../random.js';

const isEven = (num) => (num % 2 === 0);

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const gameQuestion = getRandomNumber(0, 100);
  const correctAnswer = (isEven(gameQuestion)) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const runGame = () => gameEngine(gameDescription, getGameData);

export default runGame;
