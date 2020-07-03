import { app } from './App';

const port: number = 4000;

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening on port ${port}`);
})