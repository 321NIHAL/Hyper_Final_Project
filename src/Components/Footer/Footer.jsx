import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import inta from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-link'>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={inta} alt="" />
                <img src={pintester_icon} alt="" />
                <img src={Whatsapp_icon} alt="" />
            </div>
        </div>

        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025</p>
        </div>
    </div>
  )
}

export default Footer
