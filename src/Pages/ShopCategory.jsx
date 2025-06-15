import { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import './CSS/ShopCategory.css';

const ShopCategory = ({ banner, category }) => {
  const { All_Product } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState('default');
  const [visibleProducts, setVisibleProducts] = useState(12);

  // Filter and sort products
  const filteredProducts = All_Product
    .filter(item => item.category.toLowerCase() === category.toLowerCase())
    .sort((a, b) => {
      switch (sortOption) {
        case 'price-low': return a.new_price - b.new_price;
        case 'price-high': return b.new_price - a.new_price;
        case 'name': return a.name.localeCompare(b.name);
        default: return 0;
      }
    });

  const currentProducts = filteredProducts.slice(0, visibleProducts);
  const totalProducts = filteredProducts.length;

  const loadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 12, totalProducts));
  };

  return (
    <div className="shop-category">
      <img src={banner} alt={`${category} category banner`} className="category-banner" />

      <div className="category-controls">
        <p className="product-count">
          Showing <span>1-{Math.min(visibleProducts, totalProducts)}</span> of {totalProducts} products
        </p>

        <div className="sort-dropdown">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            aria-label="Sort products"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A-Z</option>
          </select>
          <img src={dropdown_icon} alt="" className="dropdown-icon" />
        </div>
      </div>

      <div className="product-grid">
        {currentProducts.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>

      {visibleProducts < totalProducts && (
        <button className="load-more" onClick={loadMore}>
          Explore More
        </button>
      )}
    </div>
  );
};

export default ShopCategory;