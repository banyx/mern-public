const Joke = require('../models/jokes.model');

module.exports = {
    createJoke: (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke:newJoke}))
        .catch(err => res.json({ message: 'Something went wrong: createJoke', error: err }))
    },

    getAllJokes: (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong: getAllJokes', error: err }));
    },
    
    getOneJoke: (req, res) => {
    Joke.findById(req.params.id)
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: 'Something went wrong: getOneJoke', error: err }));
    },
    
    updateJoke: (req, res) => {
    Joke.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong: updateJoke', error: err }))
    },
    
    deleteJoke: (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
        .then(result => res.json({result: result }))
        .catch(err => res.json({ message: 'Something went wrong: deleteJoke', error: err }))
    }
}