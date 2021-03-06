const express = require('express');
const posts = express.Router({mergeParams: true});
const comments = require('./comments');
const reactions = require('./reactions');
const controller = require('../controllers/posts.controller')

posts.get('/', controller.getAllPostOfAccount);
posts.post('/', controller.post);

posts.get('/:postId', controller.getSingle);
posts.patch('/:postId', controller.patchSingle);
posts.delete('/:postId', controller.deleteSingle);

posts.use('/:postId/comments', comments);
posts.use('/:postId/reactions', reactions);

module.exports = posts;

