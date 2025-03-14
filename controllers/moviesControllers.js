import movies from '../data/movies.js';

export const getAllMovies = (req, res) => {
    res.status(200).json(movies);
};

export const getMovieById = (req, res) => {
    const id = req.params.id;
    if (id < 0 || id >= movies.length){
        return res.status(404).json({message: 'Movie not found'})
    };
    res.status(200).json(movies[id]);
};

export const createMovie = (req, res) => {
    const {title, director, release_date, oscar} = req.body;
    if (!title || !director || !release_date || oscar === undefined){
        return res.status(400).json({message: 'Missing data'})
    };
    const newMovie = {title, director, release_date, oscar};
    movies.push(newMovie);
    res.status(201).json(newMovie);
};

export const updateMovie = (req, res) => {
    const id = req.params.id;
    if (id < 0 || id >= movies.length){
        return res.status(404).json({message: 'Movie not found'})
    };
    const {title, director, release_date, oscar} = req.body;
    if (!title || !director || !release_date || oscar === undefined){
        return res.status(400).json({message: "Missing data"})
    };
    const newMovie = {title, director, release_date, oscar};
    movies[id] = {title, director, release_date, oscar};
    res.status(200).json(movies[id]);
};

export const deleteMovie = (req, res) => {
    const id = req.params.id;
    if (id < 0 || id >= movies.length) {
        return res.status(404).json({ message: 'Film not found' });
    };
    movies.splice(id, 1);
    res.status(200).json({ message: 'Delete successful' });
};