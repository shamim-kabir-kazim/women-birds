import React from 'react';
import Headerds from './Headerds';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <header className="header">
        <Headerds />
      </header>
      <main className="main-content">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
