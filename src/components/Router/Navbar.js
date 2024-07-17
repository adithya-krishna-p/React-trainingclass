import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
   <nav className='navbar'>
    <div className='navbar-brand'>
        Techflix
    </div>
    <ul className='navbar-nav'>
      <li className='nav-item'>
      <Link className='navlink' to={"/Home"}>Home</Link>
      </li>
      <li className='nav-item'>
      <Link className='navlink' to={"/About"}> About us</Link>
      </li>
      <li className='nav-item'>
      <Link className='navlink' to={"/Contact"}>Contact us</Link>
    </li>
    </ul>
   </nav>
    </>
  )
}

export default Navbar;