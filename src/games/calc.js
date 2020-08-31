import gameEngine from '../index.js';

import { random } from '../cli.js';

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

const questions = 'What is the result of the expression?';

const gameData = () => {
  const num1 = random(0, 30);
  const num2 = random(0, 30);
  const operator = randomOperator();
  const messageGame = `Question: ${num1} ${operator} ${num2}`;
  const trueAnswer = String(calculateExpression(num1, num2, operator));
  return [messageGame, trueAnswer];
};

const runGame = () => gameEngine(questions, gameData);

export default runGame;
