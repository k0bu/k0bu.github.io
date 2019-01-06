//DEBUG=main node debug-test.js

const debug = require('debug')('main');
debug('Start');

for(let i=0; i<10; i++){
    console.log(i);
}

debug('End');