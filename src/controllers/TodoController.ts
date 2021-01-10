import { Request, Response } from 'express';
import IController from './IController';

const db = require('../db/models');

class TodoController implements IController {
  index(req: Request, res: Response): Response {
    return res.send('index');
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.app.locals.credential;
    const { description } = req.body;

    const todo = await db.todo.create({ user_id: id, description });

    return res.status(200).send({
      data: todo,
      message: 'Todo created',
    });
  };

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
