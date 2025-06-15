import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItem = () => {
  const { All_Product, cartItem, removFromCart, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className='cartitems'>
      <div className="cart_item_format_main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {All_Product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart_item_format">
                <img src={e.image} alt="" className='cart_icon_product_icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <img
                  src={remove_icon}
                  alt="Remove"
                  onClick={() => removFromCart(e.id)}
                  className='cart_remove_icon'
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems_down">
        <div className="cartitems_Total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems_total_item">
              <p>Subtotal</p>
              <p>${totalAmount}</p>
            </div>
            <hr />
            <div className="cartitems_total_item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems_total_item">
              <h3>Total</h3>
              <h3>${totalAmount}</h3>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>

          <div className="cartitems_promocode">
            <p>If you have a promo code, enter it here:</p>
            <div className="cartitems_promobox">
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
