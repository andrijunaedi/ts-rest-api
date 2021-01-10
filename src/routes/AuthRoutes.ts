import BaseRoute from './BaseRoute';

//* Middleware
import validate from '../middlewares/AuthValidator';

//* Controllers
import AuthController from '../controllers/AuthController';

class AuthRoutes extends BaseRoute {
  public routes(): void {
    this.router.post('/register', validate, AuthController.register);
    this.router.post('/login', AuthController.login);
  }
}

export default new AuthRoutes().router;
