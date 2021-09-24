import cors from 'cors';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import helmet from 'helmet';
import express, { Application } from 'express';

import BaseController from './controllers/base.controller';

class App {
  public app: Application;
  public port: number;

  constructor(controllers: Array<BaseController>) {
    this.app = express();
    dotenv.config();
    if (process.env.PORT_NUMBER) {
      this.port = parseInt(process.env.PORT_NUMBER);
    } else {
      this.port = 5000;
    }
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(helmet());
    this.app.use(cors());
    if (process.env.NODE_ENV === 'development') {
      this.app.use(morgan('dev'));
    }
  }

  private initializeControllers(controllers: Array<BaseController>) {
    controllers.forEach(controller => {
      this.app.use('/api/v1/', controller.router);
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(colors.bgBlue(`App listening on the port ${this.port}`));
    });
  }
}

export default App;
