import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false); 

  const { getTotalCartAmount } = useContext(StoreContext);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='Logo' className='logo' /></Link>
      <ul className='navbar-menu'>
      <a href='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</a>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
      </ul>
      <div className='navbar-right'>
        <div className={`navbar-search ${isExpanded ? 'expanded' : ''}`}>
          <input
            type='text'
            placeholder='Search...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            handleKeyPressKeyPress={handleKeyPress}
            className='navbar-search-input'
          />
          <button onClick={toggleSearch} className='navbar-search-button'>
            <img src={assets.search_icon} alt='Search Icon' />
          </button>
        </div>
        <div className='navbar-cart-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt='Basket Icon' /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar

