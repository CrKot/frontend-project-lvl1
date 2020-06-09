#!/usr/bin/env node

import isEven from '../src/isEven.js';

import { userName, greeting } from '../src/index.js';

greeting();
isEven(userName);
