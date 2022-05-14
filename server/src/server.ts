import express, { Express, Request, Response } from 'express';
import col from 'cli-color';

export class Server {
  public app: Express.application = express();
  constructor() {
    let router = express.Router();
    router.get('/hello', (Request, Response) => {
      Response.status(200).json('School Library v1.0.0');
    });
    this.app.use(router);
  }

  public async init() {
    console.log(col.green('\ninitializing server...'));
  }
}
