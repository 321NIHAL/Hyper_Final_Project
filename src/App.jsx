import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

// Pages
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSingup';

// Assets
import menBanner from './Components/Assets/banner_mens.png';
import womenBanner from './Components/Assets/banner_women.png';
import kidsBanner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar />

        <main className="content-wrapper">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Shop />} />

            {/* Category Pages */}
            <Route
              path="/men"
              element={<ShopCategory banner={menBanner} category="men" />}
            />
            <Route
              path="/women"
              element={<ShopCategory banner={womenBanner} category="women" />}
            />
            <Route
              path="/kids"
              element={<ShopCategory banner={kidsBanner} category="kid" />}
            />

            {/* Product Page */}
            <Route path="/product/:productId" element={<Product />} />

            {/* Other Pages */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />

            {/* 404 Page (optional) */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;