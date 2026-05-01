import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
import blogService from '../services/blogService';
import { UserContext } from '../context/UserContext';
import '../styles/EditBlogPage.css';

const EditBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await blogService.getBlogById(id);
        if (!user || (user.role !== 'admin' && data.userId !== user.id)) {
          setError('You are not authorized to edit this blog.');
          return;
        }
        setBlog({
          ...data,
          tags: data.tags ? data.tags.join(', ') : ''
        });
      } catch (err) {
        setError('Failed to load blog for editing');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id, user]);

  const handleSubmit = async (blogData) => {
    try {
      await blogService.updateBlog(id, blogData);
      alert('Blog updated successfully!');
      navigate(`/blog/${id}`);
    } catch (err) {
      alert('Failed to update blog');
      console.error(err);
    }
  };

  const handleCancel = () => {
    navigate(`/blog/${id}`);
  };

  if (!user) {
    return <div className="error">You must be logged in to edit blogs.</div>;
  }

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!blog) return <div className="error">Blog not found</div>;

  return (
    <div className="edit-blog-page">
      <BlogForm
        initialData={blog}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
  return (
    <div className="edit-blog-page">
      <BlogForm
        initialData={blog}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default EditBlogPage;
