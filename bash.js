const cat = require('./cat');

// Output a prompt
process.stdout.write('prompt > ');

// the stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(" ");
  
const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
if (cmd[0] === "pwd") {
    pwd()
}
else if(cmd[0] ==="ls"){
    ls()
}
else if(cmd[0] ==="cat"){
    let fName = cmd[1]
    process.stdout.write(fName)
    cat(fName, 'utf8', function(err,data){
        process.stdout.write(data)
    })


}
else{
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
}
});



