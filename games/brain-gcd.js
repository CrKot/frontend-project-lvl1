import readlineSync from 'readline-sync';

import {
  userName, random,
} from '../src/index.js';

const greatestCommonDivisor = (num1, num2) => {
  let divisor = Math.min(num1, num2);
  while (divisor > 0) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      return divisor;
    }
    divisor -= 1;
  }
  return divisor;
};

const gcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = random(10, 50);
    const num2 = random(50, 100);
    const commonDivisor = greatestCommonDivisor(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (+yourAnswer === +commonDivisor) {
      console.log('Correct!');
    } else {
      return console.log(
        `"${yourAnswer}" is wrong answer ;(. Correct answer was "${commonDivisor}".
          Let's try again, ${userName}!`,
      );
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gcd;
