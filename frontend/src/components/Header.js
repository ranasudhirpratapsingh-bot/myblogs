import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { UserContext } from '../context/UserContext';

const Header = ({ onSearch }) => {
  const { user, login, register, logout } = useContext(UserContext);
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '', role: 'user' });
  const [error, setError] = useState('');

  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isLogin) {
        await login({ username: formData.username, password: formData.password });
      } else {
        await register(formData);
      }
      setShowAuth(false);
      setFormData({ username: '', password: '', role: 'user' });
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>My Blog</h1>
        </Link>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          {user && (
            <Link to="/create" className="nav-link btn btn-nav-primary">
              Write Blog
            </Link>
          )}
        </nav>
        <div className="user-controls">
          {user ? (
            <>
              <span className="user-label">
                Logged in as <strong>{user.username}</strong> ({user.role})
              </span>
              <button className="btn btn-secondary" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-secondary" onClick={() => { setShowAuth(true); setIsLogin(true); }}>
                Login
              </button>
              <button className="btn btn-nav-primary" onClick={() => { setShowAuth(true); setIsLogin(false); }}>
                Register
              </button>
            </>
          )}
        </div>
      </div>

      {showAuth && (
        <div className="auth-modal">
          <div className="auth-form">
            <h3>{isLogin ? 'Login' : 'Register'}</h3>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {!isLogin && (
                <div className="form-group">
                  <select name="role" value={formData.role} onChange={handleInputChange}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              )}
              <div className="form-buttons">
                <button type="submit" className="btn btn-primary">
                  {isLogin ? 'Login' : 'Register'}
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowAuth(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="search-container">
        <input
          type="text"
          placeholder="Search blogs..."
          className="search-input"
          onChange={handleSearchChange}
        />
      </div>
    </header>
  );
};

export default Header;
