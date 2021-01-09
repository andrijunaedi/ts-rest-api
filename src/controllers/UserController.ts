import { Request, Response } from 'express';
import IController from './IController';

let data: any[] = [
  { id: 1, name: 'Andri' },
  { id: 2, name: 'Diky' },
  { id: 3, name: 'Iksan' },
  { id: 4, name: 'Reygi' },
  { id: 5, name: 'Rohmat' },
];

class UserController implements IController {
  index(req: Request, res: Response): Response {
    return res.send(data);
  }

  create(req: Request, res: Response): Response {
    const { id, name } = req.body;

    data.push({ id, name });
    return res.send('created user success');
  }

  show(req: Request, res: Response): Response {
    const { id } = req.params;

    return res.send(data.find((item) => item.id === parseInt(id)));
  }

  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    let person = data.find((item) => item.id === parseInt(id));
    person.name = name;

    return res.send('updated user success');
  }

  delete(req: Request, res: Response): Response {
    const { id } = req.params;

    return res.send(data.filter((item) => item.id !== parseInt(id)));
  }
}

export default new UserController();
