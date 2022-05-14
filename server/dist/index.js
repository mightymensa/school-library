"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const server_1 = require("./server");
const http_1 = __importDefault(require("http"));
var server = new server_1.Server();
var port = process.env.HTTP_PORT || 9001;
server.init().then(() => {
    var http_server = http_1.default.createServer(server.app);
    http_server.listen(port);
    console.log('Server running on port: ', port);
});
//# sourceMappingURL=index.js.map