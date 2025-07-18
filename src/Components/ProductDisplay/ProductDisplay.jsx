import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const { product } = props
    const {addToCart} = useContext(ShopContext)
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-image">
                    <img src={product.image} alt="" className='productdisplay-main-img' />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>

                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>

                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum, beatae nobis fuga quaerat
                    dicta atque aliquam libero autem officia mollitia vitae sint eaque perferendis quod animi excepturi alias nihil!
                </div>

                <div className="productdisplay-right-price">
                    <span className="price-label">Deal Price:</span>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                </div>

                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>

                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size-options">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>

                <p className='productdisplay-right-category'><span>Category : <span>Women, T-shirt, Crop Top</span></span></p>
                <p className='productdisplay-right-category'><span>Tags : <span>Modern, Latest</span></span></p>
            </div>

        </div>

    )
}

export default ProductDisplay