import gameEngine from '../index.js';

import getRandomNumber from '../random.js';

const getProgression = (start, step, length) => {
  const arithmeticProgression = [];
  for (let i = 0; i < length; i += 1) {
    arithmeticProgression.push(start + step * i);
  }
  return arithmeticProgression;
};

const gameDescription = 'What number is missing in the progression?';

const getGameData = () => {
  const startProgression = getRandomNumber(0, 30);
  const step = getRandomNumber(2, 30);
  const lengthProgrerssion = 10;
  const progression = getProgression(startProgression, step, lengthProgrerssion);
  const hiddenNumber = getRandomNumber(0, lengthProgrerssion - 1);
  const correctAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const gameQuestion = progression.join(' ');
  return [gameQuestion, correctAnswer];
};

const runGame = () => gameEngine(gameDescription, getGameData);

export default runGame;
