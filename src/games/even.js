import gameEngine from '../index.js';

import getRandomNumber from '../cli.js';

const isEven = (num) => (num % 2 === 0);

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getDataGame = () => {
  const num = getRandomNumber(0, 100);
  const messageToPlayer = `${num}`;
  const trueAnswer = (isEven(num)) ? 'yes' : 'no';
  return [messageToPlayer, trueAnswer];
};

const runGame = () => gameEngine(descriptionGame, getDataGame);

export default runGame;
