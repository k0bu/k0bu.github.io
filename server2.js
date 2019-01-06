const http = require('http');

const server = http.createServer(function(req,res){
    if(req.method === 'GET' && req.url === '/favicon.ico'){
        const fs = require('fs');
        const rs = fs.createReadStream('favicon.cio');
        rs.pipe(res);
    } else {
        console.log(`${req.method} ${req.url}`);
        res.end(`url is "${decodeURI(req.url)}."`);
    }
});

const port = 8080;

server.listen(port, function(){
    console.log(`Start server in port ${port}.`);
});
