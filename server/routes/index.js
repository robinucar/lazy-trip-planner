// require express

const express = require('express')

// require ensureAuthenticated

const { ensureAuthenticated } = require('../config/auth')

// setup router

const router = express.Router();

//set homepage router and welcome message

router.get('/', (req, res) => res.render('welcome'))

// set dashboard router 

router.get('/dashboard',ensureAuthenticated, (req, res) => 
res.render('dashboard', {
    name: req.user.name
}))

//export router

module.exports = router