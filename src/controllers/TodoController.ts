import { Request, Response } from 'express';
import IController from './IController';

import TodoService from '../services/TodoService';

class TodoController implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todos = await service.getAll();

    if (todos) return res.send({ message: 'success', data: todos });
    return res.send({ message: 'empty', data: [] });
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.create();

    if (todo) return res.send({ message: 'success', data: todo });
    return res.send({ message: 'error' });
  };

  show = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.getOne();

    if (todo) return res.send({ message: 'success', data: todo });
    return res.send({ message: 'empty', data: [] });
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.update();

    if (todo) return res.send({ message: 'success updated' });
    return res.send({ message: 'failed update' });
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.delete();

    if (todo) return res.send({ message: 'success deleted' });
    return res.send({ message: 'failed delete' });
  };
}

export default new TodoController();
