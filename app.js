import express from 'express';
import moviesRoutes from './routes/moviesRoutes.js';

const app = express();

app.use(express.json());
app.use('/', moviesRoutes);

app.listen(3000, () => {
    console.log('Servers runs on port 3000');
});
