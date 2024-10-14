import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container-fluid bg-light text-dark py-4">
      <div className="row text-center text-md-left">
        {/* Left Section: Links */}
        <div className="col-md-3 mb-3">
          <h5>About</h5>
          <ul className="list-unstyled text-center">
            <li>
              <a href="#" className="text-decoration-none text-dark">About</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-dark">Products</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-dark">Dealers</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-dark">Distributors</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-dark">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Middle Section: Address */}
        <div className="col-md-5 mb-3">
          <h5>Address</h5>
          <p>
            TEZLA Energy Pvt. Ltd
            <br />
            Ananthapura Industrial Area, Kannur, Kubmala, Kerala-671321
            <br />
            Ph. /WhatsApp: +91 7902777727
            <br />
            Email:{" "}
            <a href="mailto:texlacare@tezlabattries.com" className="text-decoration-none">
              texlacare@tezlabattries.com
            </a>
          </p>
        </div>

        {/* Right Section: Location Map */}
        <div className="col-md-3 ps-5 mb-3">
          <h5>Location Map</h5>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8743911616596!2d75.63103441538005!3d11.774137291781882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6bc80ef273721%3A0x5bcb95f63ebd5e89!2sAnanthapura%20Industrial%20Area%2C%20Kerala%20671321!5e0!3m2!1sen!2sin!4v1619489369865!5m2!1sen!2sin"
            width="100%"
            height="200"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Social Media Icons and Copyright */}
      <div className="row pt-3 border-top">
        <div className="col-12 text-center">
          <p className="mb-0">
            <FaFacebook className="mx-2" />
            <FaInstagram className="mx-2" />
            <FaYoutube className="mx-2" />
            <FaTwitter className="mx-2" />
          </p>
          <p className="mt-2">
            © 2024 TEZLA Energy Pvt. Ltd. All rights reserved.
          </p>
          <p>
            <a href="#" className="text-decoration-none">Terms and Conditions</a> |{" "}
            <a href="#" className="text-decoration-none">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;