import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import ThemeContext from '../Contexts/themeContext';

const Card = ({ user }) => {

  const { theme } = useContext(ThemeContext);

  const { name, username, id } = user;
  const addFav = () => {
    const existingFavs = JSON.parse(localStorage.getItem('favUsers'));
    if (existingFavs?.find(fav => fav.id === user.id)) {
      return;
    }
    localStorage.setItem('favUsers', JSON.stringify(existingFavs ? [...existingFavs, user] : [user]))

  }

  return (
    <div className="card-wrapper">
      <div className={`card ${theme?.cardColor}`}>
        <img className="img-doctor" src="images/doctor.jpg" alt="" />
        <Link to={`/dentist/${id}`}>{name}</Link>
        <p>{username}</p>
        <button onClick={addFav} className="favButton"><svg height="1rem" width="1rem" version="1.1" id="Capa_1"
          viewBox="0 0 53.867 53.867">
          <polygon style={{ fill: "#EFCE4A" }} points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798
	10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
        </svg></button>
      </div>
    </div>
  );
};

export default Card;
