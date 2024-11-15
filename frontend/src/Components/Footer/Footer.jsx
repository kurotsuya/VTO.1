import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          {/* Wrap the logo in a Link to make it clickable */}
          <Link to="/">
            <img src={footer_logo} alt="Pixel-Try Logo" />
            <p>PIXEL-TRY</p>
          </Link>
        </div>

        <div className="footer-links">
          <h3>About</h3>
          <ul>
            <li><Link to='/about'>About Us</Link></li>
            
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: support@pixeltry.com</p>
          <p>Phone: 123-456-7890</p>
        </div>

        <div className="footer-address">
          <h3>Address</h3>
          <p>123 Pixel-Try St, Suite 456</p>
          <p>City, Country 12345</p>
        </div>

        <div className="footer-hours">
          <h3>Store Hours</h3>
          <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
          <p>Sat: 10:00 AM - 5:00 PM</p>
          <p>Sun: Closed</p>
        </div>

        <div className="footer-socials">
          <div className="footer-social-icons">
            {/* Links to social media platforms */}
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <img src={instagram_icon} alt="Instagram" />
            </a>
            <a href="https://www.pinterest.com/PixelTry01/_created/" target="_blank" rel="noopener noreferrer">
              <img src={pintester_icon} alt="Pinterest" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp_icon} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>&copy; 2024 Pixel-Try - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
