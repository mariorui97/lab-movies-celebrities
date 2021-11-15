//  Add your code here
const mongoose = require('mongoose')

require('./Celebrity.model')

const MovieSchema = new mongoose.Schema({
    title : String,
    genre: String,
    plot : String,
    cast :  [{
        ref: 'celebrities',
        type: mongoose.Schema.Types.ObjectId
    }]
})

const MovieModel = mongoose.model('movies', MovieSchema)

module.exports = MovieModel