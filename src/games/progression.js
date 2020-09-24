import gameEngine from '../index.js';

import getRandomNumber from '../getRandom.js';

const getProgression = (start, step, length) => {
  const arithmeticProgression = [];
  for (let i = 0; i < length; i += 1) {
    arithmeticProgression.push(start + step * i);
  }
  return arithmeticProgression;
};

const gameDescription = 'What number is missing in the progression?';

const getDataGame = () => {
  const startProgression = getRandomNumber(0, 30);
  const step = getRandomNumber(2, 30);
  const setLengthProgrerssion = 10;
  const progression = getProgression(startProgression, step, setLengthProgrerssion);
  const hideNumber = getRandomNumber(0, setLengthProgrerssion - 1);
  const correctAnswer = String(progression[hideNumber]);
  progression[hideNumber] = '..';
  const gameQuestion = progression.join(' ');
  return [gameQuestion, correctAnswer];
};

const runGame = () => gameEngine(gameDescription, getDataGame);

export default runGame;
