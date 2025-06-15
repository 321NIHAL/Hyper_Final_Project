import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

// Assets
import logo from '../Assets/logo.png';
import cartIcon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(
    location.pathname === '/' ? 'shop' : location.pathname.slice(1).toLowerCase()
  );
  const {getTotalCartitems}  = useContext(ShopContext)

  const menuItems = [
    { key: 'shop', path: '/', label: 'Shop' },
    { key: 'men', path: '/men', label: 'Men' },
    { key: 'women', path: '/women', label: 'Women' },
    { key: 'kids', path: '/kids', label: 'Kids' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
          <img src={logo} alt="Shopper Logo" className="logo" />
          <span className="brand-name">SHOPPER</span>
        </Link>
      </div>

      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li 
            key={item.key}
            className={`nav-item ${activeMenu === item.key ? 'active' : ''}`}
            onClick={() => setActiveMenu(item.key)}
          >
            <Link to={item.path} className="nav-link">
              {item.label}
              {activeMenu === item.key && <span className="active-indicator" />}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <Link to="/login" className="login-btn">
          <button className="btn-primary">Login</button>
        </Link>
        <div className="cart-wrapper">
          <Link to="/cart" className="cart-icon">
            <img src={cartIcon} alt="Shopping Cart" />
            <span className="cart-count">{getTotalCartitems()}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;