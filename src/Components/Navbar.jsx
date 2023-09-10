import React, { useContext } from 'react'
import { Link, Outlet } from "react-router-dom";
import ThemeContext from '../Contexts/themeContext';
import Footer from './Footer';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <div className="h-[100vh]" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <nav className='flex w-full justify-end'>
        <ul className='flex'>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/contact" >Contact</Link></li>
          <li><Link to="/favs" >Favs</Link></li>
        </ul>
        <button onClick={handleChangeTheme}>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml: space="preserve">

            <defs>
            </defs>
            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
              <path d="M 69.491 71.08 c -18.67 3.414 -36.573 -8.953 -39.988 -27.623 S 38.456 6.884 57.126 3.469 c 1.777 -0.325 3.541 -0.463 5.292 -0.511 C 54.979 0.112 46.69 -0.796 38.282 0.742 C 13.839 5.212 -2.353 28.651 2.117 53.094 s 27.909 40.634 52.352 36.164 c 16.252 -2.972 28.847 -14.334 34.155 -28.798 C 83.739 65.803 77.161 69.677 69.491 71.08 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(247,215,127); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            </g>
          </svg>
        </button>
      </nav>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Navbar