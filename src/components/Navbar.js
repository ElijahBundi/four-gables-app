import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
// import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false)
    /*const [button, setButton] = useState(true)*/

    function handleClick() {
        setClick(!click)
    }

    function closeMobileMenu() {
        setClick(false)
    }

    /*
    function showButton() {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    */

  return (
    <>
        <nav className="navbar" >
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
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
                {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
            </div>
        </nav>
    </>
  )
}

export default Navbar