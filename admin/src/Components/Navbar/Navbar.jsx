import './Navbar.css';
import navlogo from '../../assets/nav-logo.svg';
import { Link } from 'react-router-dom'; // Ensure React Router is installed

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/admin">
        <img src={navlogo} alt="Logo" className="nav-logo" />
      </Link>
      
    </div>
  );
};

export default Navbar;
