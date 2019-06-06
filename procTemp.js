const rl = require('readline');
const fs = require('fs');
const five = require('johnny-five');
const board = new five.Board();
let currTemp;

board.on('ready', function() {
  const lcd = five.LCD({
    pins: [7,8,9,10,11,12],
    backlight: 6,
    rows: 2,
    cols: 20,
  });
  
function readfile() {
  let rlInterface = rl.createInterface({
    input: fs.createReadStream('./currTemp'),
    output: console.log('File init'),
    console: false,
  });

rlInterface.on('line', line => { lcd.clear().print(line) }) 
}

fs.watchFile('./currTemp', readfile);

  
})

