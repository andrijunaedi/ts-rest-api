import { Request, Response } from 'express';
import IController from './IController';

class TodoController implements IController {
  index(req: Request, res: Response): Response {
    return res.send('index');
  }

  create(req: Request, res: Response): Response {
    return res.send('create');
  }

  show(req: Request, res: Response): Response {
    return res.send('show');
  }

  update(req: Request, res: Response): Response {
    return res.send('update');
  }

  delete(req: Request, res: Response): Response {
    return res.send('delete');
  }
}

export default new TodoController();
