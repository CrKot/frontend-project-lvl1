#!/usr/bin/env node

import { greeting, userName } from '../src/index.js';

const name = userName;
greeting(name);
