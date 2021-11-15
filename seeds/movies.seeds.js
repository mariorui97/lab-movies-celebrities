// SEEDING IS TO ENSURE OUR DB HAS SOME INITIAL DATA

// 1. MAKE THE DB CONNECTIONS
require('../db')
const mongoose = require('mongoose')

// 2. REQUIRE THE MODEL
let MoviesModel = require('../models/Movie.model')

// 3. INSERT DATA IN THE MODEL
MoviesModel.insertMany([
    { title: "Alice in Wonderland", genre: "fantasy", plot: "Alice dies", cast: ['61928d6fa60d34431cfa91b5' , '61928d6fa60d34431cfa91b6'] },
    { title: "Frozen", genre: "Horror", plot: "main character always survive", cast: '61928d6fa60d34431cfa91b6'},
    { title: "The Conjuring", genre: "comedy", plot: "everyone lives", cast: '61928d6fa60d34431cfa91b7'}
])
    .then((result) => {
        console.log('Movies:' ,result.length)
        mongoose.connection.close()
    })
    .catch((err) => {
        console.log('Error ', err)
        mongoose.connection.close()
    })