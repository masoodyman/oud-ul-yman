import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid bg-primary text-light mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Services</h5>
              <ul className="list-unstyled">
                <li><NavLink to="/service" className="text-light">OUD QAADEEM</NavLink></li>
                <li><NavLink to="/service" className="text-light">OUD HINDI</NavLink></li>
                <li><NavLink to="/service" className="text-light">OUD COMMBODI</NavLink></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <address>
                Muslim Twon Lahore<br />
                Country, Pakistan<br />
                <a href="tel:+123456789" className="text-light">+1 (234) 567-89</a><br />
                <a href="mailto:info@example.com" className="text-light">masoodurrehmaan046@gmail.com</a>
              </address>
            </div>
            <div className="col-md-4">
              <h5>Social Media</h5>
              <ul className="list-unstyled">
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">Twitter</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">Facebook</a></li>
                <li><a href="https://www.linkedin.com/in/masood-ur-rehman-6b4029283/" target="_blank" rel="noopener noreferrer" className="text-light">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
