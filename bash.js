// Output a prompt
process.stdout.write('prompt > ');

// the stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  // if (cmd === 'pwd') {
  //   process.stdout.write('You typed: ' + 'hello you are here')
  //   process.stdout.console.log(`Current directory: ${process.cwd()}`);
  // }
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});



