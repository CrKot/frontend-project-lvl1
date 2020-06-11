import {
  victoryGame, falseAnswer, answer, question, correctAnswer, random,
} from './index.js';

const randomArithmeticProgression = () => {
  const n = random(0, 100);
  const d = random(2, 30);
  const arithmeticArrays = [n];
  for (let i = 0; i < 9; i += 1) {
    const lastNumber = arithmeticArrays.length - 1;
    const nextNumber = +arithmeticArrays[lastNumber] + d;
    arithmeticArrays.push(nextNumber);
  }
  return arithmeticArrays;
};

const finishTheProgression = (name) => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const progression = randomArithmeticProgression();
    const hideNumber = random(0, 9);
    const invisiblNumber = [];
    invisiblNumber.push(progression[hideNumber]);
    progression[hideNumber] = '..';
    question(progression.join(' '));
    const yourAnswer = answer();
    if (+yourAnswer === +invisiblNumber) {
      correctAnswer();
    } else {
      return falseAnswer(yourAnswer, invisiblNumber);
    }
  }
  return victoryGame(name);
};

export default finishTheProgression;
