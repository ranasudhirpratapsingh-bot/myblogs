import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CreateBlogPage from './pages/CreateBlogPage';
import EditBlogPage from './pages/EditBlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
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
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2026 My Blog. All rights reserved By Sudhir Kumar.</p>
        </footer>
      </div>
    </Router>
    </UserProvider>
  );
}

export default App;
