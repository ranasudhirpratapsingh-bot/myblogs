import React, { useState, useEffect, useCallback } from 'react';
import blogService from '../services/blogService';
import '../styles/HomePage.css';

const HomePage = ({ searchQuery }) => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = useCallback(async (query) => {
    if (!query.trim()) {
      setFilteredBlogs(blogs);
      return;
    }

    try {
      const results = await blogService.searchBlogs(query);
      setFilteredBlogs(results);
      if (results.length > 0) {
        setSelectedBlog(results[0]);
      } else {
        setSelectedBlog(null);
      }
    } catch (err) {
      setError('Search failed. Please try again.');
    }
  }, [blogs]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      handleSearch(searchQuery);
    } else {
      setFilteredBlogs(blogs);
      if (blogs.length > 0 && !selectedBlog) {
        setSelectedBlog(blogs[0]);
      }
    }
  }, [searchQuery, blogs, handleSearch, selectedBlog]);

  const fetchBlogs = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await blogService.getAllBlogs();
      setBlogs(data);
      setFilteredBlogs(data);
      if (data.length > 0) {
        setSelectedBlog(data[0]);
      }
    } catch (err) {
      setError('Failed to load blogs. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
        <div className="home-layout">
          <aside className="blog-list-panel">
            <h2>All Blogs</h2>
            <ul className="blog-list">
              {filteredBlogs.map((blog) => (
                <li
                  key={blog._id}
                  className={selectedBlog && selectedBlog._id === blog._id ? 'blog-list-item active' : 'blog-list-item'}
                  onClick={() => setSelectedBlog(blog)}
                >
                  <span className="blog-list-title">{blog.title}</span>
                  <span className="blog-date">{formatDate(blog.createdAt)}</span>
                </li>
              ))}
            </ul>
          </aside>

          <section className="blog-detail-panel">
            {selectedBlog ? (
              <article className="blog-detail-card">
                <h1>{selectedBlog.title}</h1>
                <div className="blog-meta-row">
                  <span>By {selectedBlog.author || 'Anonymous'}</span>
                  <span>{formatDate(selectedBlog.createdAt)}</span>
                </div>
                {selectedBlog.image && (
                  <div className="blog-detail-image">
                    <img src={selectedBlog.image} alt={selectedBlog.title} />
                  </div>
                )}
                <div className="blog-detail-content">
                  {selectedBlog.content.split('\n').map((paragraph, index) => (
                    paragraph.trim() && <p key={index}>{paragraph}</p>
                  ))}
                </div>
                {selectedBlog.tags && selectedBlog.tags.length > 0 && (
                  <div className="blog-tags-row">
                    {selectedBlog.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </article>
            ) : (
              <div className="no-blogs">
                <p>Select a blog from the list to view its full content.</p>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default HomePage;
