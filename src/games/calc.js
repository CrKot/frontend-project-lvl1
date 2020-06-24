import readlineSync from 'readline-sync';

import {
  random, userName, falseAnswer, roundsToVictory,
  greeting, messages,
} from '../index.js';

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

greeting();

const calculate = () => {
  messages('What is the result of the expression?');
  for (let round = 1; round <= roundsToVictory; round += 1) {
    const num1 = random(0, 30);
    const num2 = random(0, 30);
    const operator = randomOperator();
    const resultExpression = calculateExpression(num1, num2, operator);
    messages(`Question: ${num1} ${operator} ${num2}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (+yourAnswer === +resultExpression) {
      messages('Correct!');
    } else {
      return messages(falseAnswer(yourAnswer, resultExpression));
    }
  }
  return messages(`Congratulations, ${userName}!`);
};

export default calculate;
