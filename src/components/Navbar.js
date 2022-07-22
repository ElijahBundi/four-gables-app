import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false)
    function handleClick() {
        setClick(!click)
    }

    function closeMobileMenu() {
        setClick(false)
    }

  return (
    <>
        <nav className="navbar" >
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' >
                    Fo-Gab <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick} >
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                    <li className='nav-item' >
                        <Link className='nav-links' to='/' onClick={closeMobileMenu} >
                            Home
                        </Link>                      
                    </li>
                    <li>
                        <Link className='nav-links' to='/about' onClick={closeMobileMenu} >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-links' to='/services' onClick={closeMobileMenu} >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-links' to='/contact-us' onClick={closeMobileMenu} >
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-links-mobile' to='/sign-up' onClick={closeMobileMenu} >
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar