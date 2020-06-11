#!/usr/bin/env node

import prime from '../src/prime.js';

import { greeting, userName } from '../src/index.js';

greeting();
prime(userName);
