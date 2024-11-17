import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';
import UpdateProduct from '../../Components/UpdateProduct/UpdateProduct';

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="admin-content">
        <Routes>
          {/* Default welcome route */}
          <Route path="/" element={<h1>Welcome to Admin</h1>} />

          {/* Other admin-specific routes */}
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProduct />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
