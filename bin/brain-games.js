#!/usr/bin/env node
import getName from '../src/cli.js';

const greeting = (user) => {
    console.log('Welcome to the Brain Games');
    user = getName();
    console.log(`Hello, ${user}!`);
};

greeting();