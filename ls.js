const fs = require('fs');

fs.readdir(__dirname, function(err, files){
	if(err) return console.error('Error: cannot read the directory');
	console.log(`List direcotry ${__dirname}:`);
	console.log(files.map(f=> '\t' + f).join('\n'));
});