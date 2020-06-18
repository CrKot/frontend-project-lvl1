import readlineSync from 'readline-sync';

import {
  random, userName,
} from '../src/index.js';

const evenOrNotEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = random(0, 100);
    const isEven = (num % 2 === 0 ? 'yes' : 'no');
    console.log(`Question: ${num}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (isEven === yourAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `"${yourAnswer}" is wrong answer ;(. Correct answer was "${isEven}".
          Let's try again, ${userName}!`,
      );
      break;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default evenOrNotEven;
