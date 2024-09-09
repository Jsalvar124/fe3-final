import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  // get favorites from localStorage. 
  const storedFavorites = localStorage.getItem("favorites");

  const favoritesArray = JSON.parse(storedFavorites);



  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favoritesArray.map(i => {
          return(
            <p key={i}>{i}</p>
          )
        })}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
