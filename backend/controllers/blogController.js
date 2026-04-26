const Blog = require('../models/Blog');

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create new blog
exports.createBlog = async (req, res) => {
  try {
    const { title, content, author, category, tags, image } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const blog = new Blog({
      title,
      content,
      author: author || 'Anonymous',
      category: category || 'General',
      tags: tags || [],
      image: image || null
    });

    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update blog
exports.updateBlog = async (req, res) => {
  try {
    const { title, content, author, category, tags, image } = req.body;

    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    if (title) blog.title = title;
    if (content) blog.content = content;
    if (author) blog.author = author;
    if (category) blog.category = category;
    if (tags) blog.tags = tags;
    if (image) blog.image = image;
    blog.updatedAt = Date.now();

    const updatedBlog = await blog.save();
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Search blogs
exports.searchBlogs = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }

    const blogs = await Blog.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } },
        { tags: { $regex: query, $options: 'i' } }
      ]
    }).sort({ createdAt: -1 });

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
