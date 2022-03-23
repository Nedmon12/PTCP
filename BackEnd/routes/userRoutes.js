const express = require('express')
const router = express()
const userController = require('../controllers/userController')
const check = require('express-validator/check')
router.get('/', (req, res) => {
    res.send('Welcome')
})

router.get('/:userid', userController.login)

router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email address'),
    check('password', 'Please enter password')
], userController.login)

module.exports = router