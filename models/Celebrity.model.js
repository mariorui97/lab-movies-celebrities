//  Add your code here
const mongoose = require('mongoose')

const CelebSchema = new mongoose.Schema({
    name : String,
    occupation: String,
    catchPhrase : String
})

const CelebModel = mongoose.model('celebrities', CelebSchema)

module.exports = CelebModel