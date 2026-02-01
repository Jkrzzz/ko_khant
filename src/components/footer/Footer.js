import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ko Khant</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/thenigma_diary"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"> </i>
          </a>
          <a
            href="https://www.tiktok.com/@allhailtycoon33?_r=1&_t=ZS-9341q49LgIR"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-tiktok"></i>
          </a>
          <a
            href="https://www.facebook.com/kktheenigma"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>
                   <a
            href="https://www.youtube.com/@allhailtycoon"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-youtube"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; HeinJKRZ. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
