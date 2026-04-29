import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import blogService from '../services/blogService';
import '../styles/HomePage.css';

const HomePage = ({ searchQuery }) => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

   const handleSearch = useCallback(()=> async (query) => {
    if (!query.trim()) {
      setFilteredBlogs(blogs);
      return;
    }

    try {
      const results = await blogService.searchBlogs(query);
      setFilteredBlogs(results);
    } catch (err) {
      setError('Search failed. Please try again.');
    }
  },[]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      handleSearch(searchQuery);
    } else {
      setFilteredBlogs(blogs);
    }
  }, [searchQuery, blogs,handleSearch]);

  const fetchBlogs = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await blogService.getAllBlogs();
      setBlogs(data);
      setFilteredBlogs(data);
    } catch (err) {
      setError('Failed to load blogs. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

 
  const handleDelete = async (id) => {
    try {
      await blogService.deleteBlog(id);
      setBlogs(blogs.filter(blog => blog._id !== id));
      alert('Blog deleted successfully');
    } catch (err) {
      alert('Failed to delete blog');
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="home-page">
      {loading && <div className="loading">Loading blogs...</div>}
      {error && <div className="error">{error}</div>}
      
      {!loading && filteredBlogs.length === 0 ? (
        <div className="no-blogs">
          <p>No blogs found. Start by creating your first blog!</p>
        </div>
      ) : (
        <div className="blogs-container">
          {filteredBlogs.map(blog => (
            <BlogCard
              key={blog._id}
              blog={blog}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
