let http = 'http';
let fs = require('fs');
let url = require('url');

http.createServer((req, res)=>{
    let pathname = url.parse(request.url).pathname;

    console.log("Request for " + pathname + " received.");
    if(pathname=="/"){
        pathname = "index.html";
    }
    fs.readFile(pathname.substr(1), (err,data)=>{
        
    })
})