import { Router, Request, Response } from 'express';

import BaseController from './base.controller';

class AuthController implements BaseController {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.post('/auth/login', this.login);
    this.router.post('/auth/register', this.register);
  }

  login = (req: Request, res: Response): Response => {
    return res.status(200).json({
      success: true,
      msg: 'Login route',
    });
  };

  register = (req: Request, res: Response): Response => {
    return res.status(200).json({
      success: true,
      msg: 'Register route',
    });
  };
}

export default AuthController;
