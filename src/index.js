import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

const userName = [];

const greeting = () => {
  console.log('Welcome to the Brain Games');
  userName.push(getName());
  console.log(`Hello, ${userName}!`);
};

const victoryGame = () => console.log(`Congratulations, ${userName}!`);

const answer = () => readlineSync.question('Your answer: ');

const falseAnswer = (userAnswer, trueAnswer) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".
  Let's try again, ${userName}!`);
};

const questionNumber = (num) => console.log(`Question: ${num}`);

const questionExpression = (num1, num2, operator) => {
  console.log(`Question: ${num1} ${operator} ${num2}`);
};

const correctAnswer = () => console.log('Correct!');

const random = (min, max) => Math.ceil(Math.random() * (max - min) + min);

export {
  getName, userName, greeting, victoryGame, answer,
  falseAnswer, questionNumber, correctAnswer, random,
  questionExpression,
};
