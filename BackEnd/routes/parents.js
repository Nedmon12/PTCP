const router = require('express').Router()
const userParents = require('../models/UserParents')


router.get('/', async (req,res) => {
    //TODO IDK YET
    //BUT THIS WILL BE POPULATED
    const userId = req.query.userId;
    const username = req.query.username;
    try {
      const user = await userParents.findById(userId)
      const { password, updatedAt, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }

})

router.post('/', async (req,res)=>{
  const newParent = new userParents(req.body)
  console.log(newParent)
  try {
    const savedParent = await newParent.save()
    res.status(200).json(savedParent)
  }
  catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router

