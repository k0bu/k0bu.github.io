const fs = require('fs');

fs.readdir(__dirname, function(err, files){
	if(err) return console.error('Error: cannot read the directory');
	console.log(`List direcotry ${__dirname}:`);
	console.log(files.map(f=> '\t' + f).join('\n'));
});

const exec = require('child_process').exec;

const command = "dir";

exec(command, function(err, stdout, stderr) {
	if(err) return console.error(`Run time error ${command}`);
	stdout = stdout.toString();
	console.log(stdout);
	stderr = stderr.toString();

	if(stderr !== ''){
		console.error('error:');
		console.error(stderr);
	}
});