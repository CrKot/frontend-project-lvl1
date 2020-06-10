import {
  victoryGame, falseAnswer, answer, question, correctAnswer, random,
} from './index.js';

const evenOrNotEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = random(0, 100);
    const isEven = num % 2 === 0 ? 'yes' : 'no';
    question(num);
    const yourAnswer = answer();
    if (isEven === yourAnswer) {
      correctAnswer();
    } else {
      return falseAnswer(yourAnswer, isEven);
    }
  }
  return victoryGame(name);
};

export default evenOrNotEven;
