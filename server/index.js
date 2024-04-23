const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} ${req.method} ${req.url}: New Req Received\n`;
  const myUrl = url.parse(req.url,true)
  console.log(myUrl)
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("HOME PAGE.")
        break;
      case "/about":
        res.end("I am Sanjit Sarkar")
        break;
      case "/signup":
        if (req.method === "GET") res.end("This is a signup Form.")
        else if (req.method == "POST") {
          // DB query
          res.end("Success");
        }
        break;
    
      default:
        res.end("404 Page not Found")
        break;
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server Started Again.");
  console.log("Server Started.");
});
