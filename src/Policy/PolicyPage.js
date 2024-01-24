import React from 'react';
import './PolicyPage.css';
import { Link } from 'react-router-dom';
import MainPageButton from '../components/MainPageButton';

const PolicyPage = () => {
  return (
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

      <div className="policy-container">
        <h1 className="Policy-title">Privacy Policy</h1>
        <p className="Policy-descr">When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring your project to life.</p>

        <h1 className="Policy-text-title">Lorem ipsum dolor.</h1>
        <p className="Policy-text-descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <span style={{ color: '#2405F2' }}>Excepteur sint occaecat</span> cupidatat non proident.</p>

        <p className="Policy-text-descr">Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <h1 className="Policy-text-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <p className="Policy-text-descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <span style={{ color: '#2405F2' }}>cupidatat</span> non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

        <ul className="Policy-num-list">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
        </ul>

        <p className="Policy-text-descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
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
};

export default PolicyPage;
