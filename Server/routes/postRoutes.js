const express = require('express');
const router = express.Router();

const {getAllPosts, createPost, deletePost} = require('../controller/post');
const {createComment} = require('../controller/comments');

const {auth} = require('../middlewares/auth')

router.get('/getAllPosts',auth, getAllPosts);
router.post('/createPost', auth, createPost);
router.post('/createComment', auth, createComment);
router.delete('/deletePost', auth, deletePost);

module.exports = router;