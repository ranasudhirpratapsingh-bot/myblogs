import axios from 'axios';
import authService from './authService';

const API_URL = '/api/blogs';

const getAuthConfig = () => {
  const token = authService.getToken();
  return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
};

const blogService = {
  getAllBlogs: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },

  getBlogById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`, getAuthConfig());
      return response.data;
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw error;
    }
  },

  createBlog: async (blogData) => {
    try {
      const response = await axios.post(API_URL, blogData, getAuthConfig());
      return response.data;
    } catch (error) {
      console.error('Error creating blog:', error);
      throw error;
    }
  },

  updateBlog: async (id, blogData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, blogData, getAuthConfig());
      return response.data;
    } catch (error) {
      console.error('Error updating blog:', error);
      throw error;
    }
  },

  deleteBlog: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`, getAuthConfig());
      return response.data;
    } catch (error) {
      console.error('Error deleting blog:', error);
      throw error;
    }
  },

  searchBlogs: async (query) => {
    try {
      const response = await axios.get(`${API_URL}/search?query=${query}`);
      return response.data;
    } catch (error) {
      console.error('Error searching blogs:', error);
      throw error;
    }
  }
};

export default blogService;
