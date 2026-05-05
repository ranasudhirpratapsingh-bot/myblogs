import React from 'react';
import '../styles/AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="container">
        <h1>About Us</h1>
        <div className="about-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Welcome to My Blog, your go-to destination for insightful articles, personal stories, 
              and thought-provoking content. Founded in 2026, we've been dedicated to creating a 
              platform where writers and readers can connect through the power of words.
            </p>
            <p>
              Our mission is to foster a community of curious minds, where diverse perspectives 
              are celebrated and meaningful conversations are sparked. Whether you're here to 
              learn something new, share your experiences, or simply enjoy a good read, we're 
              thrilled to have you as part of our growing community.
            </p>
          </div>
          
          <div className="about-section">
            <h2>What We Offer</h2>
            <div className="features">
              <div className="feature">
                <h3>Quality Content</h3>
                <p>Carefully curated articles on various topics including technology, lifestyle, travel, and more.</p>
              </div>
              <div className="feature">
                <h3>Community Driven</h3>
                <p>A platform where writers can share their stories and readers can engage with meaningful content.</p>
              </div>
              <div className="feature">
                <h3>User-Friendly</h3>
                <p>Easy-to-use interface that makes reading and writing blogs a delightful experience.</p>
              </div>
            </div>
          </div>
          
          <div className="about-section">
            <h2>Our Values</h2>
            <ul className="values-list">
              <li><strong>Authenticity:</strong> We believe in genuine voices and real stories.</li>
              <li><strong>Inclusivity:</strong> Everyone's perspective matters and deserves to be heard.</li>
              <li><strong>Quality:</strong> We strive for excellence in everything we publish.</li>
              <li><strong>Community:</strong> Building connections through shared experiences and ideas.</li>
            </ul>
          </div>
          
          <div className="about-section">
            <h2>Join Our Community</h2>
            <p>
              Ready to start your blogging journey? Create an account today and become part of our 
              vibrant community of writers and readers. Whether you're a seasoned blogger or just 
              getting started, My Blog is the perfect place to share your thoughts and connect with 
              like-minded individuals.
            </p>
            <p>
              Thank you for being part of My Blog. Together, we're creating a space where ideas 
              flourish and connections are made.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;