import React from 'react';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/analysis">Analysis</a></li>
        <li><a href="/notifications">Notifications</a></li>
        <li><a href="/contacts">Contacts</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
