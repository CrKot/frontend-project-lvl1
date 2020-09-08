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

const gameEngine = (descriptionGame, gameData) => {
  if (userName.length === 0) {
    greeting();
  }
  console.log(descriptionGame);
  for (let round = 1; round <= roundsToVictory; round += 1) {
    const [messageToPlayer, trueAnswer] = gameData();
    console.log(`Question: ${messageToPlayer}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${yourAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".
      Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
