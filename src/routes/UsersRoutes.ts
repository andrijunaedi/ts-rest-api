import { Router, Request, Response } from 'express';
import IRoute from './IRoute';

class UsersRoutes implements IRoute {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.get('/', (req: Request, res: Response) => {
      res.send('This index endpoint users');
    });

    this.router.post('/', (req: Request, res: Response) => {
      res.send(req.body);
    });
  }
}

export default new UsersRoutes().router;
