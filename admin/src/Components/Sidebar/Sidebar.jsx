import './Sidebar.css';
import { Link } from 'react-router-dom';
import add_product_icon from '../../assets/Product_Cart.svg';
import list_product_icon from '../../assets/Product_list_icon.svg';
import user_management_icon from '../../assets/arrow_icon.svg'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={'/addproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="" />
          <p>Add product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
      <Link to={'/updateproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" />
          <p>Update Product</p>
        </div>
      </Link>
      {/* <Link to={'/usermanagement'} style={{ textDecoration: 'none' }}>  }
        <div className="sidebar-item">
          <img src={user_management_icon} alt="" />
          <p>User Management</p>
        </div>
      </Link> */}
    </div>
  );
};

export default Sidebar;
