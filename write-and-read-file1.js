const fs = require('fs');
const path = require('path');

fs.writeFile('Hello.txt', 'Hello World from Node.js\n', function(err){
    if(err) return console.log('Error: cannot write to file');
});

fs.readFile(path.join(__dirname, 'hello.txt'), { encoding: 'utf8'}, function(err, data) {
    if(err) return console.error('Error: cannot read file');
    console.log('The content of the file: ');
    console.log(data);
});