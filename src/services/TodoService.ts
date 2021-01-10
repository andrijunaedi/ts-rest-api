import { Request } from 'express';

const db = require('../db/models');

class TodoService {
  credential: {
    id: number;
  };
  body: Request['body'];
  params: Request['params'];

  constructor(req: Request) {
    this.credential = req.app.locals.credential;
    this.body = req.body;
    this.params = req.params;
  }

  getAll = async () => {
    return await db.todo.findAll({
      where: { user_id: this.credential.id },
      attributes: ['id', 'description'],
    });
  };

  create = async () => {
    const { description } = this.body;

    return await db.todo.create({ user_id: this.credential.id, description });
  };

  getOne = async () => {
    const { id } = this.params;

    return await db.todo.findOne({
      where: { id, user_id: this.credential.id },
      attributes: ['id', 'description'],
    });
  };

  update = async () => {
    const { id } = this.params;
    const { description } = this.body;

    return await db.todo.update({ description }, { where: { id, user_id: this.credential.id } });
  };

  delete = async () => {
    const { id } = this.params;

    return await db.todo.destroy({ where: { id, user_id: this.credential.id } });
  };
}

export default TodoService;
