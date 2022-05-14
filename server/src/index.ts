import 'dotenv/config';
import { Server } from './server';
import http from 'http';

var server = new Server();
var port = process.env.HTTP_PORT || 9001;

server.init().then(() => {
  var http_server = http.createServer(server.app);
  http_server.listen(port);
  console.log('Server running on port: ', port);
});
