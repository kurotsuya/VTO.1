import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Profile from './Pages/Profile';
import LoginSignup from './Pages/LoginSignup';
import VirtualTry from './Components/TryVirtually/TryVirtually';  
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import CartItems from './Components/CartItems/CartItems';
import ConfirmOrder from './Components/ConfirmOrder/ConfirmOrder';
import About from './Components/About/About';



function AppContent() {
  const location = useLocation();

  const showNavbar = location.pathname !== '/login';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/cart" element={<CartItems />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/virtualtry/:productId' element={<VirtualTry />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;