import express from 'express';
import * as moviesControllers from '../controllers/moviesControllers.js';

const router = express.Router();

router.get('/movies', moviesControllers.getAllMovies);
router.get('/movies/:id', moviesControllers.getMovieById);
router.post('/movies', moviesControllers.createMovie);
router.put('/movies/:id', moviesControllers.updateMovie);
router.delete('/movies/:id', moviesControllers.deleteMovie);

export default router;