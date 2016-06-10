'use strict';
const request = require('request');
const Logger = require('./logger');

class Translator {

  constructor(args) {
    this.key = 'trnsl.1.1.20160509T120807Z.ccdb250164c8abe9.b969087a173eb94be8c724d54a2197dfa9e6eead';
    this.lang = 'en-ru';
  }

  translate(words, mode, callback) {
    let url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.key}&lang=${this.lang}&text=${words}`;
    request(url, (err, response, body) => {
      let translated = JSON.parse(body).text[0];

      if(mode) {
        new Logger().log(words, translated);
      } else {
        callback(translated);
      }

    });
  }

}

module.exports = Translator;
