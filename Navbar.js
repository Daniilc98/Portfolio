import React from 'react'
import './Navbar.css';

const Navbar = ({ isScrolling }) => {

  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <nav className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}>
        <div className='navbar-logo' onClick={toTop}>
            DL
        </div>
    </nav>
  )
}

export default Navbar;