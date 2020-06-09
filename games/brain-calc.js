#!/usr/bin/env node

import calculate from '../src/calculate.js';

import { userName, greeting } from '../src/index.js';

greeting();
calculate(userName);
