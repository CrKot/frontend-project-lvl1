import readlineSync from 'readline-sync';

import {
  random, userName, falseAnswer, roundsToVictory,
} from '../index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const evenOrNotEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= roundsToVictory; i += 1) {
    const num = random(0, 100);
    console.log(`Question: ${num}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (isEven(num) === yourAnswer) {
      console.log('Correct!');
    } else {
      return falseAnswer(yourAnswer, isEven(num));
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default evenOrNotEven;
