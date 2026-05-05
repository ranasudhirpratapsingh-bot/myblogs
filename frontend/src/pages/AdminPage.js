import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import blogService from '../services/blogService';
import '../styles/AdminPage.css';

const AdminPage = () => {
  const { user } = useContext(UserContext);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user && user.role === 'admin') {
      fetchAllBlogs();
    }
  }, [user]);

  const fetchAllBlogs = async () => {
    try {
      setLoading(true);
      const blogs = await blogService.getAllBlogs();
      setBlogs(blogs);
    } catch (err) {
      setError('Failed to fetch blogs');
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await blogService.deleteBlog(blogId);
        setBlogs(blogs.filter(blog => blog._id !== blogId));
      } catch (err) {
        setError('Failed to delete blog');
        console.error('Error deleting blog:', err);
      }
    }
  };

  if (!user || user.role !== 'admin') {
    return (
      <div className="admin-page">
        <div className="container">
          <h1>Access Denied</h1>
          <p>You need admin privileges to access this page.</p>
          <Link to="/" className="btn btn-primary">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="container">
        <h1>Admin Dashboard</h1>
        <p>Manage all blogs on the platform</p>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading blogs...</div>
        ) : (
          <div className="blogs-table">
            <div className="table-header">
              <div>Title</div>
              <div>Author</div>
              <div>Created</div>
              <div>Actions</div>
            </div>
            {blogs.length === 0 ? (
              <div className="no-blogs">No blogs found</div>
            ) : (
              blogs.map(blog => (
                <div key={blog._id} className="table-row">
                  <div className="blog-title">
                    <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                  </div>
                  <div>{blog.author}</div>
                  <div>{new Date(blog.createdAt).toLocaleDateString()}</div>
                  <div className="actions">
                    <Link to={`/edit/${blog._id}`} className="btn btn-secondary btn-small">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="btn btn-danger btn-small"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;