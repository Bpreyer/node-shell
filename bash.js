const cat = require("./cat");

// Output a prompt
process.stdout.write("prompt > ");
const fs = require("fs");
const { builtinModules } = require("module");
// the stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ");

  const pwd = require("./pwd");
  const ls = require("./ls");
  const cat = require("./cat");
  const curl = require("./curl");

  if (cmd[0] === "pwd") {
    pwd();
  } else if (cmd[0] === "ls") {
    ls();
  } else if (cmd[0] === "cat") {
    let fName = cmd[1];
    cat(fName);
  } else if (cmd[0] === "curl") {
    let url = cmd[1];
    curl(url);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});

module.exports = {
  done: function () {
    process.stdout.write("\nprompt > ");
  },
};
