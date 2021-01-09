import { Request, Response } from 'express';

export default interface IController {
  index(req: Request, res: Response): Response;
  create(req: Request, res: Response): Response;
  show(req: Request, res: Response): Response;
  update(req: Request, res: Response): Response;
  delete(req: Request, res: Response): Response;
}
