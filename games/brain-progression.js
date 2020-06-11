#!/usr/bin/env node

import finishTheProgression from '../src/progression.js';

import { greeting, userName } from '../src/index.js';

greeting();
finishTheProgression(userName);
