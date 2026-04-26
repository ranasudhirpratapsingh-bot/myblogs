import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogService from '../services/blogService';
import '../styles/BlogDetailPage.css';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   fetchBlog();
  // }, [id]);

    const fetchBlog = useCallback(()=> async () => {
    try {
      const data = await blogService.getBlogById(id);
      setBlog(data);
    } catch (err) {
      setError('Failed to load blog');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  ,[]);

 useEffect(() => {
    fetchBlog();
  }, [id,fetchBlog]);


  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await blogService.deleteBlog(id);
        alert('Blog deleted successfully');
        navigate('/');
      } catch (err) {
        alert('Failed to delete blog');
      }
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-page">{error}</div>;
  if (!blog) return <div className="error-page">Blog not found</div>;

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-container">
        {blog.image && (
          <div className="blog-detail-image">
            <img src={blog.image} alt={blog.title} />
          </div>
        )}
        
        <article className="blog-detail-article">
          <h1 className="blog-title">{blog.title}</h1>
          
          <div className="blog-detail-meta">
            <span className="author">By {blog.author || 'Anonymous'}</span>
            <span className="date">{formatDate(blog.createdAt)}</span>
            <span className="category">{blog.category}</span>
          </div>

          <div className="blog-body">
            {blog.content.split('\n').map((paragraph, index) => (
              paragraph.trim() && <p key={index}>{paragraph}</p>
            ))}
          </div>

          {blog.tags && blog.tags.length > 0 && (
            <div className="blog-detail-tags">
              <strong>Tags:</strong>
              {blog.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </article>

        <div className="blog-detail-actions">
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/edit/${id}`)}
          >
            Edit Blog
          </button>
          <button
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Delete Blog
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
