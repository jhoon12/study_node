const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Set-Cookie": "name=mansubjn",
  });

  fs.readFile("./server.html", function (err, data) {
    if (err) {
      throw err;
    }
    res.end(data);
  });
});

server.listen(8080, () => console.log("8080번 포트에서 서버 대기 중"));
