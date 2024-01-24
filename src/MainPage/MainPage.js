import React from 'react';
import './MainPage.css'
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
  
        <div className="main-page-info">
          <div className="main-page-text-column">
            <h1 className="main-page-text-title">Building stellar websites for early startups</h1>
            <p className="main-page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <button className="main-page-button2">View our work</button>
            <a href="#">View Pricing →</a>
          </div>
          <div className="main-page-photo-column">
            <img src="images/main-page-photo.png" alt="photo" className="main-page-photo" />
          </div>
        </div>
  
        <div className="page-work">
          <div className="page-work-text">
            <h1 className="page-work-title">How we work</h1>
            <p className="page-work-descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" className="page-work-link">Get in touch with us →</a>
          </div>
  
          <div className="page-work-images">
            <img src="images/pointer1.png" alt="Image 1" className="work-picture" />
            <div className="work-text">
              <h5 className="page-work-text-images">Strategy</h5>
              <p className="page-work-text-descr">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
            </div>
            <img src="images/pointer2.png" alt="Image 2" className="work-picture" />
            <div className="work-text">
              <h5 className="page-work-text-images">Another Strategy</h5>
              <p className="page-work-text-descr">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
            </div>
          </div>
        </div>
  
        <div className="page-projects">
          <div className="page-projects-text">
            <h1 className="page-projects-title">View our projects</h1>
            <a href="#" className="page-projects-link">View More →</a>
          </div>
          <div className="project-container">
            <img src="images/project1.png" alt="Project 1" className="project-image" />
            <div className="overlay">
              <div className="rectangle">
                <h2 className="project-title">Workhub office Webflow</h2>
                <p className="project-description">Webflow Design</p>
                <p className="project-text">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam</p>
                <a href="#" className="view-project-link">View Project</a>
              </div>
            </div>
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