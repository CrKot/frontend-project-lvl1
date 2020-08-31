import gameEngine from '../index.js';

import { random } from '../cli.js';

const randomArithmeticProgression = () => {
  const n = random(0, 30);
  const d = random(2, 30);
  const arithmeticArrays = [n];
  for (let i = 0; i < 9; i += 1) {
    const lastNumber = arithmeticArrays.length - 1;
    const nextNumber = +arithmeticArrays[lastNumber] + d;
    arithmeticArrays.push(nextNumber);
  }
  return arithmeticArrays;
};

const questions = 'What number is missing in the progression?';

const gameData = () => {
  const progression = randomArithmeticProgression();
  const hideNumber = random(0, 9);
  const trueAnswer = String(progression[hideNumber]);
  progression[hideNumber] = '..';
  const messageGame = `Question: ${progression.join(' ')}`;
  return [messageGame, trueAnswer];
};

const runGame = () => gameEngine(questions, gameData);

export default runGame;
