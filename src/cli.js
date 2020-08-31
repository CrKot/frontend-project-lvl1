import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name? ');

export const random = (min, max) => Math.ceil(Math.random() * (max - min) + min);
