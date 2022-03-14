const express = require('express')
const router = express()
const userController = require('../controllers/userController')

router.get('/', (req, res) => {
    res.send('Welcome')
})

router.get('/:userid', userController.login)

module.exports = router