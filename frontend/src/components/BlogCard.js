import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogCard.css';

const BlogCard = ({ blog, onDelete, onEdit }) => {
  const truncateContent = (content, length = 150) => {
    return content.length > length ? content.substring(0, length) + '...' : content;
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="blog-card">
      {blog.image && (
        <div className="blog-image">
          <img src={blog.image} alt={blog.title} />
        </div>
      )}
      <div className="blog-content">
        <h3>{blog.title}</h3>
        <div className="blog-meta">
          <span className="author">{blog.author || 'Anonymous'}</span>
          <span className="date">{formatDate(blog.createdAt)}</span>
          <span className="category">{blog.category}</span>
        </div>
        <p className="blog-excerpt">{truncateContent(blog.content)}</p>
        {blog.tags && blog.tags.length > 0 && (
          <div className="blog-tags">
            {blog.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}
        <div className="blog-actions">
          <Link to={`/blog/${blog._id}`} className="btn btn-small btn-read">
            Read More
          </Link>
          <button
            className="btn btn-small btn-edit"
            onClick={() => onEdit(blog._id)}
          >
            Edit
          </button>
          <button
            className="btn btn-small btn-delete"
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this blog?')) {
                onDelete(blog._id);
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
