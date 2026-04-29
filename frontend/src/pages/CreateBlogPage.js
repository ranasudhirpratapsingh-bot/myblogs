import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
import blogService from '../services/blogService';
import '../styles/CreateBlogPage.css';

const CreateBlogPage = ({ onBlogCreated }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (blogData) => {
    setLoading(true);
    setError('');

    try {
      await blogService.createBlog(blogData);
      alert('Blog posted successfully!');
      if (onBlogCreated) {
        onBlogCreated();
      }
      navigate('/');
    } catch (err) {
      setError('Failed to create blog. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-blog-page">
      {error && <div className="error-banner">{error}</div>}
      <BlogForm onSubmit={handleSubmit} />
      {loading && <div className="loading-overlay">Posting...</div>}
    </div>
  );
};

export default CreateBlogPage;
