import { Request, Response, NextFunction } from 'express';

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  const isAuth: boolean = false;

  if (isAuth) {
    next();
  }

  res.status(401).setHeader('Content-Type', 'application/json');
  return res.send('Unauthorized').end();
};
