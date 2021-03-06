import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {Button} from './Button'

function Navbar() {
    const [click , setClick] = useState(false)
    const [button,setButton] =useState(true)
    const handelClick =() => setClick(!click)
    const closeMobileMenu =() => setClick(false)

    const showButton =() =>{
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(()=>{
        showButton()
    },[]);

    window.addEventListener('resize',showButton)

    return (
        <>
          <nav className="navbar">
              <div className="navbar-container">
                  <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                      گیلان توریسم <i className="fab fa-typo3" />
                  </Link>
                  <div className="menu-icon" onClick={handelClick}>
                      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className="nav-item">
                          <Link to="/" className="nav-links" onClick={closeMobileMenu}>صفحه نخست</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/services" className="nav-links" onClick={closeMobileMenu}>خدمات ما</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/products" className="nav-links" onClick={closeMobileMenu}>محصولات ما</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>ثبت نام</Link>
                      </li>
                  </ul>
                  {button && <Button buttonStyle='btn--outline'>ثبت نام</Button>}
              </div>
          </nav>  
        </>
    )
}

export default Navbar
