import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ onSearch }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>My Blog</h1>
        </Link>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/create" className="nav-link btn btn-nav-primary">
            Write Blog
          </Link>
        </nav>
      </div>
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
