import gameEngine from '../index.js';

import getRandomNumber from '../cli.js';

const operators = ['+', '-', '*'];
const getRandomOperator = () => {
  const num = getRandomNumber(0, operators.length - 1);
  return operators[num];
};

const calculateExpression = (num1, num2, operator) => {
  let result;
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

const descriptionGame = 'What is the result of the expression?';

const getDataGame = () => {
  const num1 = getRandomNumber(0, 30);
  const num2 = getRandomNumber(0, 30);
  const operator = getRandomOperator();
  const messageToPlayer = `${num1} ${operator} ${num2}`;
  const trueAnswer = String(calculateExpression(num1, num2, operator));
  return [messageToPlayer, trueAnswer];
};

const runGame = () => gameEngine(descriptionGame, getDataGame);

export default runGame;
