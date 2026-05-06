import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CreateBlogPage from './pages/CreateBlogPage';
import EditBlogPage from './pages/EditBlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsPage from './pages/AboutUsPage';
import PrivacyPage from './pages/PrivacyPage';
import AdminPage from './pages/AdminPage';
import ProfilePage from './pages/ProfilePage';
import './styles/App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <UserProvider>
      <Router>
        <div className="App">
        <Header onSearch={setSearchQuery} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
            <Route path="/create" element={<CreateBlogPage />} />
            <Route path="/edit/:id" element={<EditBlogPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
            <p>&copy; 2026 My Blog. All rights reserved By Sudhir Kumar.</p>
          </div>
        </footer>
      </div>
    </Router>
    </UserProvider>
  );
}

export default App;
