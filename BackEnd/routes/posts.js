<<<<<<< HEAD
const router = require("express").Router();
const Post = require("../models/posts");
const User = require("../models/users");

router.get("/", (req,res)=>{
  res.send("welcome to post")
})

//create a post

router.post("/newpost", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a post

router.put("/updatepost/:id", async (req, res) => {
  console.log("trying to update")
    try {
      const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete a post

router.delete("/deletepost/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//like / dislike a post

router.put("/likepost/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//get a post

router.get("/getpost/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
=======
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

>>>>>>> a2130a3c3a430ae504e361e4582fa5fc0d213e4e
