import { Request, Response } from 'express';
import IController from './IController';

const db = require('../db/models');

class TodoController implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.app.locals.credential;

    const todos = await db.todo.findAll({
      where: { user_id: id },
      attributes: ['id', 'description'],
    });

    if (todos) return res.send({ message: 'success', data: todos });
    return res.send({ message: 'empty', data: [] });
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.app.locals.credential;
    const { description } = req.body;

    const todo = await db.todo.create({ user_id: id, description });

    return res.status(200).send({ message: 'success', data: todo });
  };

  show = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;
    const { id } = req.params;

    const todo = await db.todo.findOne({
      where: { id, user_id },
      attributes: ['id', 'description'],
    });

    if (todo) return res.send({ message: 'success', data: todo });
    return res.send({ message: 'empty', data: [] });
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;
    const { id } = req.params;
    const { description } = req.body;

    const todo = await db.todo.update({ description }, { where: { id, user_id } });

    if (todo) return res.send({ message: 'success updated' });
    return res.send({ message: 'failed update' });
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;
    const { id } = req.params;

    const todo = await db.todo.destroy({ where: { id, user_id } });

    if (todo) return res.send({ message: 'success deleted' });
    return res.send({ message: 'failed delete' });
  };
}

export default new TodoController();
