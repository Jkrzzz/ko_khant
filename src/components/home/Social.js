import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/heinhtet_jkrz/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-instagram"> </i>
      </a>
      <a
        href="https://www.linkedin.com/in/khant-bo-ab30401aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://www.facebook.com/ko.khant.526"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-facebook"></i>
      </a>
    </div>
  );
};

export default Social;
