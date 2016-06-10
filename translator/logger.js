'use strict';
const fs = require('fs');
const path = require('path');

class Logger {

  log(raw, translated) {
    let couple, filename;

    couple = `${raw} -- ${translated}`;
    filename = this._generateFilename();

    fs.appendFile(filename, couple, (err) => console.log(err || translated) );
  }

  _generateFilename() {
    let date, monthNames;

    date = new Date();
    monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    return path.join(__dirname, `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}.log`);
  }

}

module.exports = Logger;
