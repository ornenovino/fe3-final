import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import ThemeContext from '../../Contexts/themeContext';
import Footer from '../Footer';
import "./Navbar.css"

const Navbar = () => {

  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <div className="page-wrapper" style={{ backgroundColor: theme?.backgroundColor, color: theme?.color }}>
      <div className="nav-wrapper">
        <nav>
          <img src="DH.ico" alt="" />
          <div>
            <ul>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/contact" >Contact</Link></li>
              <li><Link to="/favs" >Favs</Link></li>
            </ul>
            <button onClick={handleChangeTheme}><svg className="moon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#b89c2c">
              <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z" />
            </svg></button>
          </div>
        </nav>
      </div>

      <div className="outlet-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Navbar;