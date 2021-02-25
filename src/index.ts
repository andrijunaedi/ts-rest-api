import { app } from './app';

const port: number | string = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Application listening in ${port}`);
});
