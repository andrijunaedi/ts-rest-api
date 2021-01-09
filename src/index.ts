import { app } from './app';

const port: number = 8000;

app.listen(port, () => {
  console.log(`Application listening in ${port}`);
});
