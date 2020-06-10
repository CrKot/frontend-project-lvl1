import {
  victoryGame, answer,
  falseAnswer, question, correctAnswer, random,
} from './index.js';

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
  for (let i = 0; i < 3; i += 1) {
    const num1 = random(10, 50);
    const num2 = random(50, 100);
    const commonDivisor = greatestCommonDivisor(num1, num2);
    question(num1, num2);
    const yourAnswer = answer();
    if (+yourAnswer === +commonDivisor) {
      correctAnswer();
    } else {
      return falseAnswer(yourAnswer, commonDivisor);
    }
  }
  return victoryGame();
};

export default gcd;
