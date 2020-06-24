import readlineSync from 'readline-sync';

import {
  userName, random, falseAnswer, roundsToVictory,
  greeting, messages,
} from '../index.js';

const isPrimeNumber = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

greeting();

const prime = () => {
  messages('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let round = 1; round <= roundsToVictory; round += 1) {
    const number = random(1, 500);
    const isPrime = isPrimeNumber(number) ? 'yes' : 'no';
    messages(`Question: ${number}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === isPrime) {
      messages('Correct!');
    } else {
      return messages(falseAnswer(yourAnswer, isPrime));
    }
  }
  return messages(`Congratulations, ${userName}!`);
};

export default prime;
