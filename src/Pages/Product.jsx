import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RealatedProduct from '../Components/RealatedProduct/RealatedProduct';

const Product = () => {
  const { All_Product } = useContext(ShopContext); // Ensure this matches your context
  const { productId } = useParams();
  const product = All_Product.find((item) => item.id === Number(productId));

  return (
    <div>
      {!product ? (
        <p>Product not found.</p>
      ) : (
        <>
          <BreadCrums product={product} />
          <ProductDisplay product={product} />
          <RealatedProduct />
        </>
      )}
    </div>
  );
};

export default Product;
