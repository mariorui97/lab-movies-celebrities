const router = require("express").Router();
const CelebModel = require('../models/Celebrity.model')


router.get("/celebrities/create", (req, res, next)=>{
    res.render('celebrities/new-celebrity')
})

router.post("/celebrities/create", (req, res, next)=>{
    const {name, occupation, catchPhrase} = req.body
    
    CelebModel.create({name, occupation, catchPhrase})
        .then(()=>{
            res.redirect('/celebrities')
        })
        .catch(()=>{
            res.render('celebrities/new-celebrity')
        })
})

router.get("/celebrities", (req, res, next)=>{    

    CelebModel.find()
        .then((celebrity) => {
            res.render('celebrities/celebrities.hbs', {celebrity})
        })
        .catch((error) => {
            next(error)
        })
})



module.exports = router;