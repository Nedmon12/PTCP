const express = require('express')
const router = express.Router()
const {check, validationResult} = require('express-validator/check')
const auth = require('../middlewares/auth')
const User = require('../models/users')
const Post = require('../models/posts')

router.post('/',[auth,[
    check('text', 'text is required').not().isEmpty()
]] ,async (req,res) => {
    const errors = validationResult(req)
    if(errors.isEmpty()) {
        //todo add post to db
        try {
            const user = await User.findById(req.user.id).select('-password')

            const newPost = new Post({
                text: req.body.text,
                name: user.name,
                user : req.user.id
            })
            const post = await newPost.save() 
        }
        catch (error) {
            res.status(500).send('Server error')
        }

    }
    else {
        return res.status(400).json({errors: errors.array()})
    }
})

module.exports = router

