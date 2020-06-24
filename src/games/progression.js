import readlineSync from 'readline-sync';

import {
  userName, random, falseAnswer, roundsToVictory,
  greeting, messages,
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

greeting();

const finishTheProgression = () => {
  messages('What number is missing in the progression?');
  for (let round = 1; round <= roundsToVictory; round += 1) {
    const progression = randomArithmeticProgression();
    const hideNumber = random(0, 9);
    const invisiblNumber = [];
    invisiblNumber.push(progression[hideNumber]);
    progression[hideNumber] = '..';
    messages(`Question: ${progression.join(' ')}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (+yourAnswer === +invisiblNumber) {
      messages('Correct!');
    } else {
      return messages(falseAnswer(yourAnswer, invisiblNumber));
    }
  }
  return messages(`Congratulations, ${userName}!`);
};

export default finishTheProgression;
