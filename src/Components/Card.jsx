import React from "react";
import { Link } from 'react-router-dom'


const Card = ({ user }) => {

  const { name, username, id } = user;
  const addFav = () => {
    const existingFavs = JSON.parse(localStorage.getItem('favUsers'));
    if(existingFavs?.find(fav => fav.id === user.id)){
      return;
    }
    localStorage.setItem('favUsers', JSON.stringify(existingFavs ? [...existingFavs, user] : [user]))

  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <Link to={`dentist/${id}`}>{name}</Link>
      <p>{username}</p>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
