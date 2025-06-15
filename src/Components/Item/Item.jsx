import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Item.css';

const Item = ({ id, image, name, new_price, old_price }) => {
    const discountPercentage = Math.round(((old_price - new_price) / old_price) * 100);

    return (
        <div className="item-card">
            <Link to={`/product/${id}`} className="item-link">
                <img
                    onClick={window.scrollTo(0, 0)}
                    src={image}
                    alt={name}
                    className="item-image"
                    loading="lazy"
                />
                <h3 className="item-name">{name}</h3>

                <div className="item-pricing">
                    <span className="current-price">${new_price.toFixed(2)}</span>
                    {old_price && (
                        <>
                            <span className="original-price">${old_price.toFixed(2)}</span>
                            {discountPercentage > 0 && (
                                <span className="discount-badge">{discountPercentage}% OFF</span>
                            )}
                        </>
                    )}
                </div>
            </Link>
        </div>
    );
};

Item.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    new_price: PropTypes.number.isRequired,
    old_price: PropTypes.number,
};

Item.defaultProps = {
    old_price: null,
};

export default Item;