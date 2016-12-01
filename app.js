const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 10000;
const release = fs.readFileSync(path.join(__dirname, 'release/templates.json'));
const result = {
  data: JSON.parse(release.toString('utf-8'))
};

//We need a function which handles requests and send response
function handleRequest(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(result));
}

const server = http.createServer(handleRequest);

server.listen(PORT, function () {
  console.log("Server listening on: http://localhost:%s", PORT);
});
