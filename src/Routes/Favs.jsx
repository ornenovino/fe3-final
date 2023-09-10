import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

const Favs = () => {

  const [favUsers, setFavUsers] = useState();

  useEffect(() => {
    setFavUsers(JSON.parse(localStorage.getItem('favUsers')))
  }, [])

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favUsers && favUsers.map(favUser => <Card key={favUser.id} user={favUser} />)}
      </div>
    </>
  );
};

export default Favs;
