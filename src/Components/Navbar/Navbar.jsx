  import React, { useContext, useState } from 'react';
  import { Link } from 'react-router-dom';
  import './Navbar.css';
  import harmony from '../assets/harmony.png';
  import cartIcon from '../assets/cart-icon.jpeg';
  import { ShopContext } from '../../Context/ShopContext';

  function Navbar() {

    const [menu, setMenu]= useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    return (
      <div className='navbar'>
        <div className='nav-logo'>
          <img src={harmony} alt="Harmony" />
          <p>Harmony</p>
        </div>
        <ul className='nav-menu'>
          <li onClick={()=> {setMenu("shop")}}> <Link to= '/' style={{ textDecoration: 'none' }}  >Home</Link> {menu=== "shop"? <hr />: <></> }</li>
          <li onClick={()=> {setMenu("households")}}> <Link to= '/households' style={{ textDecoration: 'none' }}>household</Link> {menu=== "households"? <hr />: <></> } </li>
          <li onClick={()=> {setMenu("outdoors")}}> <Link to= '/outdoors' style={{ textDecoration: 'none' }}>outdoor</Link>{menu=== "outdoors"? <hr />: <></> } </li>

        </ul>
        <div className='nav-login'>
          <Link to= '/login'> <button>Login</button></Link>
        <Link to= '/cart'><img src={cartIcon} alt="Cart" /></Link>
          

          <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
      </div>
    );
  }

  export default Navbar;
