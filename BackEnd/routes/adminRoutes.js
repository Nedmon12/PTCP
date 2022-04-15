const router = require('experss').Router()
const Schools = require('../models/schools')

router.get('/', (req,res) => {
    //render admin landing page
    //front end shit ahhhhhhh
    try {
        //modify next line of code to only find unapproved schools
        const listOfSchools = await Schools.find().limit(10)
        res.status(200).json(listOfSchools)
    }
    catch (error) {
        res.send(error)
    }
  
})

router.get('/schools', (req,res) => {
    //list schools with pending requests
    //a reduced list of all the schools (as an option)
    try {
        //modify next line of code to only find unapproved schools
        const listOfSchools = await Schools.find().limit(10)
        res.status(200).json(listOfSchools)
    }
    catch (error) {
        res.send(error)
    }
})

router.get('/schools/:schoolId', (req,res) => {
    //a single instance of school
    //todo allow modifications on the front end
    try {
        const school = await Schools.findById(req.params.schoolId)
        if (school.schoolId == req.params.schoolId) {
            await Schools.updateOne({set: req.body})
            res.status(200).json("School information succesfully updated")
        }
        else {
            res.status(403).json("Not authorized for this operation")
        }
    } catch (error) {
        res.status(500).json("Unable to serve")
    }

})



module.exports = router