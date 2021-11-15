const router = require("express").Router();
const MoviesModel = require('../models/Movie.model')

router.get("/movies", (req, res, next)=>{    

    MoviesModel.find()
        .populate('cast')
        .then((movies) => {
            res.render('movies/movies.hbs', {movies})
        })
        .catch((error) => {
            next(error)
        })
})

router.get('/movies/:moviesId', (req, res, next) => {
    const {moviesId} = req.params

    MoviesModel.findById(moviesId)
        .populate('cast')
        .then((movies) => {
            res.render('movies-details.hbs', {movies})
        })
        .catch((error) => {
            next(error)
        })
  });

  
  router.post('/movies/:moviesId/delete', (req, res, next) => {

    const {movieId} = req.params 
    MoviesModel.findByIdAndRemove(movieId)
    .then(() => {
        res.redirect('/movies')
    })
    .catch(() => {
        next('Movies not deleted')
    })
  });
  
  
 
  

module.exports = router;