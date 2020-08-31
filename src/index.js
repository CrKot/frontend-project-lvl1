import readlineSync from 'readline-sync';

const userName = [];

export const greeting = () => {
  if (userName.length === 0) {
    console.log('Welcome to the Brain Games');
    userName.push(readlineSync.question('May I have your name? '));
    console.log(`Hello, ${userName}!`);
  }
};

const roundsToVictory = 3;

const gameEngine = (questions, gameData) => {
  if (userName.length === 0) {
    greeting();
  }
  console.log(questions);
  for (let round = 1; round <= roundsToVictory; round += 1) {
    const [message, trueAnwer] = gameData();
    console.log(message);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === trueAnwer) {
      console.log('Correct!');
    } else {
      return console.log(`"${yourAnswer}" is wrong answer ;(. Correct answer was "${gameData[2]}".
      Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
