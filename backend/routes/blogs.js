const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Get all blogs
router.get('/', blogController.getAllBlogs);

// Search blogs
router.get('/search', blogController.searchBlogs);

// Get single blog by ID
router.get('/:id', blogController.getBlogById);

// Create new blog
router.post('/', blogController.createBlog);

// Update blog
router.put('/:id', blogController.updateBlog);

// Delete blog
router.delete('/:id', blogController.deleteBlog);

module.exports = router;
