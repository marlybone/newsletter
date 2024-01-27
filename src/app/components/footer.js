import React from 'react';

 export default function Footer() {
  return (
    <footer className="footer bg-footer">
      <div className="container">
        <div className="footer-logo">
          <a href="/">
            <img src="/logo.svg" alt="Your Website Logo" />
          </a>
        </div>

        <ul className="">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>

        <p className="copyright">Copyright © 2023 Your Website Name</p>
      </div>
    </footer>
  );
};