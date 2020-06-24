import readlineSync from 'readline-sync';

import {
  userName, random, falseAnswer, roundsToVictory,
  greeting, messages,
} from '../index.js';

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

greeting();

const gcd = () => {
  messages('Find the greatest common divisor of given numbers.');
  for (let round = 1; round <= roundsToVictory; round += 1) {
    const num1 = random(10, 50);
    const num2 = random(50, 100);
    const commonDivisor = greatestCommonDivisor(num1, num2);
    messages(`Question: ${num1} ${num2}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (+yourAnswer === +commonDivisor) {
      messages('Correct!');
    } else {
      return messages(falseAnswer(yourAnswer, commonDivisor));
    }
  }
  return messages(`Congratulations, ${userName}!`);
};

export default gcd;
