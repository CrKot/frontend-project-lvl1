import gameEngine from '../index.js';

import getRandomNumber from '../cli.js';

const getProgression = (start, step, length) => {
  const arithmeticProgression = [start];
  for (let i = 0; i < length; i += 1) {
    const lastNumber = arithmeticProgression.length - 1;
    const nextNumber = +arithmeticProgression[lastNumber] + step;
    arithmeticProgression.push(nextNumber);
  }
  return arithmeticProgression;
};

const descriptionGame = 'What number is missing in the progression?';

const getDataGame = () => {
  const startProgression = getRandomNumber(0, 30);
  const step = getRandomNumber(2, 30);
  const setLengthProgrerssion = 10;
  const progression = getProgression(startProgression, step, setLengthProgrerssion);
  const hideNumber = getRandomNumber(0, 9);
  const trueAnswer = String(progression[hideNumber]);
  progression[hideNumber] = '..';
  const messageToPlayer = `${progression.join(' ')}`;
  return [messageToPlayer, trueAnswer];
};

const runGame = () => gameEngine(descriptionGame, getDataGame);

export default runGame;
