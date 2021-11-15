// SEEDING IS TO ENSURE OUR DB HAS SOME INITIAL DATA

// 1. MAKE THE DB CONNECTIONS
require('../db')
const mongoose = require('mongoose')

// 2. REQUIRE THE MODEL
let CelebModel = require('../models/Celebrity.model')

// 3. INSERT DATA IN THE MODEL
CelebModel.insertMany([
    { name: "Jason Stathan", occupation: "actor", catchPhrase: "Hey" },
    { name: "Mario Rui", occupation: "director", catchPhrase: "asdasd" },
    { name: "Ricardo Nunes", occupation: "boss", catchPhrase: "qwerty" }
])
    .then((result) => {
        console.log('Cast inserted:' ,result.length)
        mongoose.connection.close()
    })
    .catch((err) => {
        console.log('Error ', err)
        mongoose.connection.close()
    })