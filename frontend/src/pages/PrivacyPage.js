import React from 'react';
import '../styles/PrivacyPage.css';

const PrivacyPage = () => {
  return (
    <div className="privacy-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <div className="privacy-content">
          <div className="last-updated">
            <p><strong>Last Updated:</strong> May 5, 2026</p>
          </div>
          
          <section className="privacy-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to My Blog ("we," "our," or "us"). We are committed to protecting your privacy 
              and ensuring the security of your personal information. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you visit our website 
              and use our services.
            </p>
          </section>
          
          <section className="privacy-section">
            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul>
              <li>Name and username</li>
              <li>Email address</li>
              <li>Password (encrypted)</li>
              <li>Profile information you choose to provide</li>
            </ul>
            
            <h3>Usage Information</h3>
            <p>We automatically collect certain information about your device and usage:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Device information</li>
            </ul>
          </section>
          
          <section className="privacy-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To provide and maintain our service</li>
              <li>To authenticate users and manage accounts</li>
              <li>To communicate with you about our services</li>
              <li>To improve our website and user experience</li>
              <li>To ensure security and prevent fraud</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>
          
          <section className="privacy-section">
            <h2>4. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy:
            </p>
            <ul>
              <li>With service providers who assist us in operating our website</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
          </section>
          
          <section className="privacy-section">
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </section>
          
          <section className="privacy-section">
            <h2>6. Your Rights</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li>Access: Request a copy of your personal data</li>
              <li>Rectification: Request correction of inaccurate data</li>
              <li>Erasure: Request deletion of your personal data</li>
              <li>Portability: Request transfer of your data</li>
              <li>Objection: Object to processing of your data</li>
            </ul>
          </section>
          
          <section className="privacy-section">
            <h2>7. Cookies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience on our website. 
              You can control cookie settings through your browser preferences.
            </p>
          </section>
          
          <section className="privacy-section">
            <h2>8. Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13. We do not knowingly collect personal 
              information from children under 13.
            </p>
          </section>
          
          <section className="privacy-section">
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>
          
          <section className="privacy-section">
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> privacy@myblog.com</p>
              <p><strong>Address:</strong> 123 Blog Street, Blog City, BC 12345</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;