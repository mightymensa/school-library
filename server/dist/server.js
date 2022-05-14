"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cli_color_1 = __importDefault(require("cli-color"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        let router = express_1.default.Router();
        router.get('/hello', (Request, Response) => {
            Response.status(200).json('School Library v1.0.0');
        });
        this.app.use(router);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(cli_color_1.default.green('\ninitializing server...'));
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map