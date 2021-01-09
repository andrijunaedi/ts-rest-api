import BaseRoute from './BaseRoute';

//* Controllers
import AuthController from '../controllers/AuthController';

class AuthRoutes extends BaseRoute {
  public routes(): void {
    this.router.post('/register', AuthController.register);
    this.router.post('/login', AuthController.login);
  }
}

export default new AuthRoutes().router;
