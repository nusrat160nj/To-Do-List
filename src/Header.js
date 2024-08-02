import React from 'react';

const Header = ({ title = "To Do List" }) => {
  return (
    <header style={{ textAlign: 'center' }}> 
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
