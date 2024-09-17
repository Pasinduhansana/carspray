import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/Logo-nonbg.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-desc">
          <div className="img-logo">
            <img src={logo} alt="Velocity Car Spray Logo" />
          </div>
          <div className="footer-description">
            At Velocity Car Spray, customer satisfaction is our highest
            priority. We are committed to delivering transparent, reliable, and
            honest services. That’s why we provide comprehensive, upfront
            estimates, ensuring you are fully informed before any repair work
            begins.
          </div>
        </div>

        <div className="footer-Navigation">
          <h1>Navigation</h1>
          <div className="link-container">
            <Link to="home" smooth={true} duration={500}>
              HOME
            </Link>
            <Link to="about-us" smooth={true} duration={500}>
              ABOUT US
            </Link>
            <Link to="specialists" smooth={true} duration={500}>
              SPECIALISTS
            </Link>
            <Link to="gallery" smooth={true} duration={500}>
              GALLERY
            </Link>
          </div>
        </div>

        <div className="footer-menu">
          <h1>Services</h1>
          <div className="link-container">
            <Link to="body-painting">BODY PAINTING</Link>
            <Link to="aw-repair">ALLOY WHEEL REPAIR</Link>
            <Link to="smart-car-repair">SMART CAR REPAIR</Link>
            <Link to="insurance-repair">INSURANCE REPAIR</Link>
          </div>
        </div>

        <div className="footer-opening-card">
          <h1>Opening Hours</h1>
          <div className="footer-opening-card-table">
            <div className="date-col1">
              <div>Monday</div>
              <div>Tuesday</div>
              <div>Wednesday</div>
              <div>Thursday</div>
              <div>Friday</div>
              <div>Saturday</div>
              <div>Sunday</div>
            </div>
            <div className="date-col2">
              <div>08.00 – 17.30</div>
              <div>08.00 – 17.30</div>
              <div>08.00 – 17.30</div>
              <div>08.00 – 17.30</div>
              <div>08.00 – 17.30</div>
              <div>08.00 – 14.00</div>
              <div>Closed</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-seperator"></div>

      <div className="footer-copyright-txt">
        <p>&copy; {new Date().getFullYear()} VELOCITY CAR SPRAYERS.</p>
        <div>
          <Link to="/terms-of-use">TERMS OF USE</Link>
          <Link to="/privacy-policy">PRIVACY POLICY</Link>
          <Link to="/cookie-policy">COOKIE POLICY</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
