'use strict';

const fs = require('fs');

fs.readFile('ornekDosya.txt', 'utf-8', function (err, data) {

  if (err) throw err;

  console.log(data);

});