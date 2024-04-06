import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav_brand">
          <h2>TEJAS</h2>
        </div>
        <ul className='nav_items'>
            <li className='nav_list'>
                <NavLink to="/">Create</NavLink>
            </li>
            <li className='nav_list'>
                <NavLink to="/checkout">Checkout</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
