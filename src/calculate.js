import {
  victoryGame, answer,
  falseAnswer, question, correctAnswer, random,
} from './index.js';

const operatorArrays = ['+', '-', '*'];
const randomOperator = () => {
  const num = random(0, 2);
  const operatorIsArray = operatorArrays[num];
  return operatorIsArray;
};

const calculateExpression = (num1, num2, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      break;
  }
  return result;
};

const calculate = (name) => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = random(0, 30);
    const num2 = random(0, 30);
    const operator = randomOperator();
    const resultExpression = calculateExpression(num1, num2, operator);
    question(num1, num2, operator);
    const yourAnswer = answer();
    if (+yourAnswer === +resultExpression) {
      correctAnswer();
    } else {
      return falseAnswer(yourAnswer, resultExpression);
    }
  }
  return victoryGame(name);
};

export default calculate;
