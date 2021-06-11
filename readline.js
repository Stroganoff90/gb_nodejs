import readline from 'readline'

var r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.on('line', function(cmd) {  
  if (cmd === 'quit') {
    console.log('BYE BYE')
    r1.close();
  } else {
    console.log('you typed: '+ cmd);
  }
});

r1.question('what? ', function(answer) {
  console.log('oh my, its ' + answer);
  r1.close();
})