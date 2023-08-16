const http = require('http');
function rqListener(req, res)
{
console.log("Aishwarya");
}
const server = http.createServer(rqListener);
server.listen(4000);
//other ways :
//Anonymous function
// http.createServer(function(req, res) {
// })
//Arrow functions
// http.createServer( (req, res) => {
// })