import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
import blogService from '../services/blogService';
import '../styles/EditBlogPage.css';

const EditBlogPage = () => {
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
  
},[]);

  useEffect(() => {
    fetchBlog();
  }, [id,fetchBlog]);


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
};

export default EditBlogPage;
