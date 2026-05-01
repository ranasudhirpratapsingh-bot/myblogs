const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { auth } = require('../middleware/auth');

// Public routes
router.get('/', blogController.getAllBlogs);
router.get('/search', blogController.searchBlogs);

// Protected routes
router.get('/:id', auth, blogController.getBlogById);
router.post('/', auth, blogController.createBlog);
router.put('/:id', auth, blogController.updateBlog);
router.delete('/:id', auth, blogController.deleteBlog);

module.exports = router;
