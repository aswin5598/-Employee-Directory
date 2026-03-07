import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-container">© {new Date().getFullYear()} My Company. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
