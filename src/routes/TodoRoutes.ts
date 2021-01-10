import BaseRoute from './BaseRoute';

//* Middleware
import { auth } from '../middlewares/AuthMiddleware';

//* Controllers
import TodoController from '../controllers/TodoController';

class TodoRoutes extends BaseRoute {
  public routes(): void {
    this.router.get('/', auth, TodoController.index);
    this.router.post('/', auth, TodoController.create);
    this.router.get('/:id', auth, TodoController.show);
    this.router.put('/:id', auth, TodoController.update);
    this.router.delete('/:id', auth, TodoController.delete);
  }
}

export default new TodoRoutes().router;
