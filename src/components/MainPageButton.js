import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import './MainPageButton.css'; 


const MainPageButton = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <Button
      to="/contact"
      className="main-page-button-contact"
      onClick={handleContactClick}
>
      Contact
    </Button>
  );
};

export default MainPageButton;
