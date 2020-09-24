import readlineSync from 'readline-sync';

export default (descriptionGame, gameData, name = null) => {
  const userName = name !== null ? name : [];
  if (userName.length === 0) {
    const greeting = () => {
      console.log('Welcome to the Brain Games');
      userName.push(readlineSync.question('May I have your name? '));
      console.log(`Hello, ${userName}!`);
      return userName;
    };
    greeting();
  }
  if (name) {
    return;
  }
  console.log(descriptionGame);
  const roundsToVictory = 3;
  for (let round = 1; round <= roundsToVictory; round += 1) {
    const [gameQuestion, correctAnswer] = gameData();
    console.log(`Question: ${gameQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
      Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
