const express = require ('express')
const validationResult = require('express-validator/check')
const User = require('../models/users')
const bcrypt = require('bcryptjs')
exports.login = (req,res) => {
    //const userid = req.params.id
    //bla bla 
    //to do authenticate users
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()})
    }
    const {name, email, password} = req.body

    try {
        let user = await User.findOne({email})
        if (user) {
            res.status(400).json({errors: [{msg: 'User already exists'}]})
        }
        //todo polish the user model
        user = new User({
            name,
            email,
            password
        })
        const salt = await bcrypt.genSalt()
        user.password = await bcrypt.hash(password,salt)
        await user.save()

        //still not sure about how we approach the composition of other user subclasses
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send('server error')
    }
}