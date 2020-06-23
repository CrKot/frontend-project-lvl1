import readlineSync from 'readline-sync';

import {
  userName, random, falseAnswer,
} from '../index.js';

const isPrimeNumber = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = random(1, 500);
    const isPrime = isPrimeNumber(number);
    const trueAnswer = isPrime ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      return falseAnswer(yourAnswer, trueAnswer);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default prime;
