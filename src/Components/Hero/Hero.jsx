import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import './Hero.css'
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">

                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Collection</p>
                    <p>For EveryOne</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Lastest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>



            <div className="hero-right">
                <img style={{ height: "600px" }} src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero