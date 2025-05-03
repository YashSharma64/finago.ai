import React, { useState } from 'react';
import Logo from './Logo';
import '../styles/LandingPage.css';

const LandingPage = ({ onGetStarted, onLoginClick }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`landing-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <div className="small-logo">
          <svg width="60" height="60" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#C4A484" strokeWidth="8"/>
            <text x="50" y="65" textAnchor="middle" fill="#C4A484" fontSize="40">$</text>
          </svg>
        </div>
        <div className="nav-text">Your Money is in Safe Hands</div>
        <div className="nav-buttons">
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            <img 
              src={isDarkMode ? "/icons8-do-not-disturb-ios-30.png" : "/icons8-dark-mode-30.png"} 
              alt={isDarkMode ? "Light Mode" : "Dark Mode"} 
              className="mode-icon"
            />
          </button>
          <button className="login-button" onClick={onLoginClick}>login/Register</button>
        </div>
      </nav>
      
      <main className="main-content">
        <Logo />
        <h1 className="main-heading" style={{fontSize: '30px'}}>India's Most Trusted AI Financial Advisory</h1>
        <button className="get-started-button" onClick={onGetStarted}>Get Started</button>
        <div className="bottom-text">
          <span role="img" aria-label="robot" className="robot-emoji">🤖</span>
          <p>Turn Your Savings into Rewards – AI-Powered Finance!</p>
        </div>
      </main>

      <section className="about-section">
        <div className="about-container">
          <h2 className="about-title">About FINAGO</h2>
          
          <div className="about-content">
            <p>
              Finago is India's first AI-powered financial advisor built to simplify money management for every Indian. Our mission is to empower individuals with smart, data-driven financial decisions through intuitive technology, without needing complex knowledge or manual effort. Whether it's tracking expenses, optimizing savings, or planning investments—Finago is your all-in-one financial guide.
            </p>
            
            <p>
              We combine the power of artificial intelligence and automation to help users understand their spending habits, receive personalized financial insights, and stay in control of their financial journey. By securely integrating with users' bank accounts and payment data, Finago delivers timely suggestions, savings tips, and actionable advice—all in a user-friendly interface designed for Indian lifestyles.
            </p>
            
            <p>
              At Finago, we believe managing money shouldn't be stressful. That's why we've created a seamless experience where users can monitor their finances, set personal goals, and unlock smarter ways to save and grow. With a deep understanding of the Indian mindset, Finago is not just another finance app—it's your trusted financial companion for everyday life.
            </p>
            
            <p className="mission">
              Our mission is simple:<br />
              Turn your savings into rewards. Make every rupee count.<br />
              Because at Finago—your money, is our responsibility.
            </p>

            <div className="founder-card">
              <div className="founder-image">
                <img src="/Yash.png" alt="Yash Sharma" />
              </div>
              <div className="founder-info">
                <h3>Founder :- Yash Sharma</h3>
                <p>AI Software Engineer</p>
                <p className="contact">Contact us - yashsharma.aiml@gmail.com</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/yash-sharma-6960ab326/" target="_blank" rel="noopener noreferrer">
                    <img src="/Linkedin.png" alt="LinkedIn" className="social-icon" />
                  </a>
                  <a href="https://wa.me/919711132445" target="_blank" rel="noopener noreferrer">
                    <img src="/whatsapp.png" alt="Instagram" className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>finago.ai</h3>
            <p>Copyright © 2025 Finago.ai</p>
            <p>All rights reserved.</p>
          </div>
          <div className="footer-address">
            <h3>Address</h3>
            <p>Contact us - +91 9711132445</p>
            <p>YourSpace Hostel, Porwal Road , Lohegaon</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 
