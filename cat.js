const { fstat } = require("fs")

const fs = require('fs')




module.exports = function (fName) {
    fs.readFile(fName, (err, data) => {
        if (err) throw err;
        process.stdout.write(data);
      });
}

// fs.readFile




