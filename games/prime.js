import readlineSync from 'readline-sync';

import {
  userName, random, falseAnswer,
} from '../src/index.js';

const isPrimeNumber = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const prime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = random(1, 500);
    const isPrime = isPrimeNumber(number);
    console.log(`Question: ${number}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === isPrime) {
      console.log('Correct!');
    } else {
      return falseAnswer(yourAnswer, isPrime);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default prime;
