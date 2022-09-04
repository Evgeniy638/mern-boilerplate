import { NextFunction, Request, Response } from 'express';

class IndexController {
  public ping = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send('pong от сервера на typescript');
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
