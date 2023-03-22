import React from "react";
import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={`${link.href}`} className="footer-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="socials-icons">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
              >
                <img
                  className="social-logo"
                  src={link.logo}
                  alt="social-logo"
                />
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Powerlifting Women
        <span id="date">{new Date().getFullYear}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
