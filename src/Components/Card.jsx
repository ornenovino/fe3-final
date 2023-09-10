import React from "react";
import { Link } from 'react-router-dom'


const Card = ({ user }) => {

  const { name, username, id } = user;
  const addFav = () => {
    const existingFavs = JSON.parse(localStorage.getItem('favUsers'));
    if (existingFavs?.find(fav => fav.id === user.id)) {
      return;
    }
    localStorage.setItem('favUsers', JSON.stringify(existingFavs ? [...existingFavs, user] : [user]))

  }

  return (
    <div className="card bg-cyan-50 rounded-lg flex-row gap-2 p-5">
      <Link to={`dentist/${id}`}>{name}</Link>
      <p>{username}</p>
      <button onClick={addFav} className="favButton rounded-lg">Add fav</button>
    </div>
  );
};

export default Card;
