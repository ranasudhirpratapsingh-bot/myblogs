import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
import blogService from '../services/blogService';
import { UserContext } from '../context/UserContext';
import '../styles/CreateBlogPage.css';

const CreateBlogPage = ({ onBlogCreated }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (blogData) => {
    if (!user) {
      setError('You must be logged in to create a blog.');
      return;
    }

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

  if (!user) {
    return (
      <div className="create-blog-page">
        <div className="error-banner">You must be logged in to create a blog.</div>
      </div>
    );
  }

  return (
    <div className="create-blog-page">
      {error && <div className="error-banner">{error}</div>}
      <BlogForm onSubmit={handleSubmit} />
      {loading && <div className="loading-overlay">Posting...</div>}
    </div>
  );
};

export default CreateBlogPage;
