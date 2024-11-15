import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if the user is logged in by looking for the auth-token in localStorage
  const isLoggedIn = localStorage.getItem('auth-token') !== null;

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the scroll distance as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <a href="/" className="logo-link">
          <p>PIXEL-TRY</p>
        </a>
      </div>

      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop"); }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link></li>
        <li onClick={() => { setMenu("mens"); }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link></li>
        <li onClick={() => { setMenu("womens"); }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link></li>
        <li onClick={() => { setMenu("kids"); }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link></li>
      </ul>

      <div className="nav-login-cart">
        {isLoggedIn ? (
          <>
            <button onClick={() => { 
              localStorage.removeItem('auth-token'); 
              window.location.replace('/'); 
            }}>Logout</button>
            <Link to="/profile"><button>Profile</button></Link>
          </>
        ) : (
          <Link to='/login'><button>Login</button></Link>
        )}

        <Link to='/cart'>
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
        
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
