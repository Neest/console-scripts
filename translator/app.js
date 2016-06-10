'use strict';

const args = require('minimist')(process.argv.slice(2));
const Translator = require('./translator');
let words, mode, translator;

words = args['_'].join(' ');
mode = args['l'];
translator = new Translator();

translator.translate(words, mode, console.log);
