import readlineSync from 'readline-sync';

import {
  random, userName, falseAnswer, roundsToVictory,
  greeting, messages,
} from '../index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

greeting();

const evenOrNotEven = () => {
  messages('Answer "yes" if the number is even, otherwise answer "no".');
  for (let round = 1; round <= roundsToVictory; round += 1) {
    const num = random(0, 100);
    messages(`Question: ${num}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (isEven(num) === yourAnswer) {
      messages('Correct!');
    } else {
      return messages(falseAnswer(yourAnswer, isEven(num)));
    }
  }
  return messages(`Congratulations, ${userName}!`);
};

export default evenOrNotEven;
