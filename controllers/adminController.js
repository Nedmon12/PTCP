const admin = require('../models/User')
const Schools = require('../models/schools')
const {getAndEditUser} = require('../services/user.services')
exports.addAdmin = async (req,res) => {
    const newAdmin = new admin(req.body)
    try {
        const saveAdmin = await newAdmin.save()
    }
    catch(error) {
        res.status(500).json(error)
    }
}
exports.getSchools = async (req,res) => {
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
}
exports.getAdmin = async (req,res) => {
    try {
        const pulledAdmin = await admin.findById(req.params.userId)
        res.status(200).json(pulledAdmin)
    }
    catch(err) {
        res.status(500).json(err)
    }
}

exports.addSchool = async (req,res) => {
    const newSchool = new Schools(req.body)
    try {
        const savedSchool = await newSchool.save()
        res.status(200).json(savedSchool)
    }
    catch(err) {
        res.status(500).json(err)
    }
}

exports.patchSchool = async (req,res) => {
    try {
        //handleValidation(req.body, res, 'editUser');
        const { _id } = req.body;
        const user = await getAndEditUser({ _id }, req.body);
        return res.json({ data: user });
      } catch (err) {
        return res.status(400).json({ error_msg: err.message });
      }
}