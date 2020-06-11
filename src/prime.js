import {
  victoryGame, falseAnswer, answer, question, correctAnswer, random,
} from './index.js';

const isPrimeNumber = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = random(1, 500);
    const isPrime = isPrimeNumber(number) ? 'yes' : 'no';
    question(number);
    const yourAnswer = answer();
    if (yourAnswer === isPrime) {
      correctAnswer();
    } else {
      return falseAnswer(yourAnswer, isPrime);
    }
  }
  return victoryGame(name);
};

export default prime;
