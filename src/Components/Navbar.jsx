import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import ThemeContext from '../Contexts/themeContext';
import Footer from './Footer';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col h-screen" style={{ backgroundColor: theme?.backgroundColor, color: theme?.color }}>
      <nav className={`flex w-full justify-between px-40 ${theme?.navColor}`}>
        <img src="DH.ico" alt="" />
        <div className="flex items-center">
          <ul className="flex">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
            <li><Link to="/favs" >Favs</Link></li>
          </ul>
          <button onClick={handleChangeTheme}><svg className="w-5 h-5 text-gray-800 dark:text-white bg-color-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#b89c2c" viewBox="0 0 18 20">
            <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z" />
          </svg></button>
        </div>
      </nav>
      <div className="grow">
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Navbar;