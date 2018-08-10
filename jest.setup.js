const fs = require('fs');
// require('./matchers/matchers');

if (!fs.existsSync('./debug')) {
  fs.mkdirSync('./debug');
}

jest.setTimeout(30000);
