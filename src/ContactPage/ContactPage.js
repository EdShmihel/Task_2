import React from 'react';
import './ContactPage.css'
import { Link } from 'react-router-dom';
import MainPageButton from '../components/MainPageButton';

function MainPage() {
  return (
<div className="main-page">
<div className="main-page-navigator">
          <img src="images/logo.png" alt="logo" className="main-page-logo" />
          <nav className="main-page-menu">
        <MainPageButton />
        <Link to="/">Home</Link>
        <Link to="#" style={{ textDecoration: 'line-through' }}>About us</Link>
        <Link to="#" style={{ textDecoration: 'line-through' }}>Features</Link>
        <Link to="#" style={{ textDecoration: 'line-through' }}>Pricing</Link>
        <Link to="#" style={{ textDecoration: 'line-through' }}>FAQ</Link>
        <Link to="#" style={{ textDecoration: 'line-through' }}>Blog</Link>
        <Link to="/policy">Privacy Policy</Link>
      </nav>
        </div>
  <div className="page-contact">
    <h1 className="contact-title">Contact Us</h1>
    <p className="contact-descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
    <div className="contact-container">
      <div className="form-field">
        <label className="form-label" htmlFor="user-name">Name</label>
        <input type="text" className="form-input" id="user-name" name="Ім’я користувача" />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="user-email">Email</label>
        <input type="email" className="form-input" id="user-email" name="Email користувача" />
      </div>
      <button className="form-btn" id="launch-btn">
        Send Message
      </button>
    </div>
  </div>

  <div className="footer">
    <img src="images/logo.png" alt="logo" className="main-page-logo" />
    <p className="footer-descr">We are always open to discuss your project and improve your online presence.</p>

    <div className="footer-contact-group">
      <h1 className="footer-contact">Our contacts</h1>
      <p className="footer-email">Email: Finsweet@gmail.com</p>
      <p className="footer-phone">Call us: +380967654321</p>
    </div>
  </div>
</div>

  );
}

export default MainPage;
