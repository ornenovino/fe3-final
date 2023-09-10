import React, { useContext } from 'react'
import { Link, Outlet } from "react-router-dom";
import ThemeContext from '../Contexts/themeContext';
import Footer from './Footer';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <nav>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/contact" >Contact</Link></li>
          <li><Link to="/favs" >Favs</Link></li>
        </ul>
        <button onClick={handleChangeTheme}>Change theme</button>
      </nav>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Navbar