import readlineSync from 'readline-sync';

import {
  random, userName,
} from '../src/index.js';

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

const calculate = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = random(0, 30);
    const num2 = random(0, 30);
    const operator = randomOperator();
    const resultExpression = calculateExpression(num1, num2, operator);
    console.log(`Question: ${num1} ${operator} ${num2}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (+yourAnswer === +resultExpression) {
      console.log('Correct!');
    } else {
      return console.log(
        `"${yourAnswer}" is wrong answer ;(. Correct answer was "${resultExpression}".
      Let's try again, ${userName}!`,
      );
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default calculate;
