const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller');
const commentsController = require('../controllers/comments.controller');
const usersController = require('../controllers/users.controller');

router.get('/posts', postsController.list);
router.get('/posts/new', postsController.create);
router.post('/posts', postsController.doCreate);
router.get('/posts/:id', postsController.detail);
router.get('/posts/:id/edit', postsController.edit);
router.post('/posts/:id/edit', postsController.doEdit);
router.post('/posts/:id/delete', postsController.delete);
router.post('/posts/:postId/comments', commentsController.create);

router.get('/register', usersController.register);
router.post('/register', usersController.doRegister);

router.get('/users', usersController.list);


router.get('/', (req, res) => res.redirect('/posts'));

module.exports = router;
