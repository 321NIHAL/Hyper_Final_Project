import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import './BreadCrums.css'
const BreadCrums = (props) => {
    const { product } = props
    return (
        <div className="breadcrumbs">
            Home <img src={arrow_icon} alt="" /> SHOP
            <img src={arrow_icon} alt="" /> {product.category}
            <img src={arrow_icon} alt="" /> <span>{product.name}</span>
        </div>

    )
}

export default BreadCrums