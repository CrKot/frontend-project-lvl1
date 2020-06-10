#!/usr/bin/env node

import gcd from '../src/gcd.js';

import { userName, greeting } from '../src/index.js';

greeting();
gcd(userName);
