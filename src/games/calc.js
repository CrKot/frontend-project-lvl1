import gameEngine from '../index.js';

import getRandomNumber from '../getRandom.js';

const operators = ['+', '-', '*'];
const getRandomOperator = () => {
  const index = getRandomNumber(0, operators.length - 1);
  return operators[index];
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

const gameDescription = 'What is the result of the expression?';

const getDataGame = () => {
  const num1 = getRandomNumber(0, 30);
  const num2 = getRandomNumber(0, 30);
  const operator = getRandomOperator();
  const gameQuestion = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculateExpression(num1, num2, operator));
  return [gameQuestion, correctAnswer];
};

const runGame = () => gameEngine(gameDescription, getDataGame);

export default runGame;
