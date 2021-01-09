import express, { Application, Request, Response } from 'express';
class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.routes();
  }

  protected routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      res.send('This route used TS');
    });
  }
}

const PORT: number = 8000;
const app = new App().app;

app.listen(PORT, () => {
  console.log(`Application listening in ${PORT}`);
});
