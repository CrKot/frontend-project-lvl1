import readlineSync from 'readline-sync';

import {
  userName, random, falseAnswer, roundsToVictory,
} from '../index.js';

const randomArithmeticProgression = () => {
  const n = random(0, 100);
  const d = random(2, 30);
  const arithmeticArrays = [n];
  for (let i = 0; i < 9; i += 1) {
    const lastNumber = arithmeticArrays.length - 1;
    const nextNumber = +arithmeticArrays[lastNumber] + d;
    arithmeticArrays.push(nextNumber);
  }
  return arithmeticArrays;
};

const finishTheProgression = () => {
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= roundsToVictory; i += 1) {
    const progression = randomArithmeticProgression();
    const hideNumber = random(0, 9);
    const invisiblNumber = [];
    invisiblNumber.push(progression[hideNumber]);
    progression[hideNumber] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (+yourAnswer === +invisiblNumber) {
      console.log('Correct!');
    } else {
      return falseAnswer(yourAnswer, invisiblNumber);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default finishTheProgression;
