import { Request, Response } from 'express';
import Authentication from '../utils/Authentication';

const db = require('../db/models');

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    const hashedPassword: string = await Authentication.passwordHash(password);

    await db.user.create({ username, password: hashedPassword });

    return res.send('Registration success');
  };

  login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;

    // find user by username
    const user = await db.user.findOne({ where: { username } });

    if (user) {
      // check password
      const compare = await Authentication.passwordCompare(password, user.password);

      if (compare) {
        // generate token
        const token: string = Authentication.generateToken(user.id, user.username);
        return res.send({ token });
      }
    }
    return res.status(401).send('Authentication failed');
  };

  profile = async (req: Request, res: Response): Promise<Response> => {
    return res.send(req.app.locals.credential);
  };
}

export default new AuthController();
