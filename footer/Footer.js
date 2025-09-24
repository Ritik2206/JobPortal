import React from "react";
import logo from "../../../assets/images/logo.png";
import "../admin-style/style1.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-social">
          <a href="https://github.com/Ritik2206" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/me_pavitraprabhakar/"
            target="_blank"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Job Portal 2024  . PVT LTD.. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
