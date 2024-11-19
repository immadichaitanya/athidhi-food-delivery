import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img className='footer-content-left-img' src={assets.logo} alt=''/>
                <p>Athidhi Restaurant is dedicated to delivering an authentic and unforgettable dining experience. Our chefs specialize in crafting dishes that combine traditional flavors with modern techniques</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon}/>
                    <img src={assets.twitter_icon}/>
                    <img src={assets.linkedin_icon}/>

                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>9848753449</li>
                    <li>Athidhi@gmail.com</li>
                </ul>
            </div>

        </div>
      <hr/>
      <p className='footer-copyright'>Copyrights 2024 Athidhi.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
