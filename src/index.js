import readlineSync from 'readline-sync';

const userName = [];

const greeting = () => {
  console.log('Welcome to the Brain Games');
  userName.push(readlineSync.question('May I have your name? '));
  console.log(`Hello, ${userName}!`);
};

const random = (min, max) => Math.ceil(Math.random() * (max - min) + min);

export {
  userName, greeting, random,
};
