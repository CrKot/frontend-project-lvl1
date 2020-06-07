#!/usr/bin/env node

import getName from '../src/cli.js';

let name = '';
const greeting = () => {
  console.log('Welcome to the Brain Games');
  name = getName();
  console.log(`Hello, ${name}!`);
  return name;
};
greeting();

const userName = name;

export default userName;
