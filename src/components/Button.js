import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, className, children, onClick }) => {
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
};

export default Button;
