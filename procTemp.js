const rl = require('readline');
const fs = require('fs');

function readfile() {
  let rlInterface = rl.createInterface({
    input: fs.createReadStream('./currTemp'),
    output: console.log('File init'),
    console: false,
  });

  rlInterface.on('line', line => console.log(line));
}

fs.watchFile('./currTemp', readfile);

