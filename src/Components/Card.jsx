import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ dentista }) => {

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");

    if (!storedFavorites) {
      // If no "favorites" key exists, initialize it with an empty array
      localStorage.setItem("favorites", JSON.stringify([]));
    } else {
      // If "favorites" already exists, check if this dentist is a favorite
      const favoritesArray = JSON.parse(storedFavorites);
      if (favoritesArray.includes(dentista.id)) {
        setIsFavorite(true);
      }
    }
  }, [dentista.id]);

  const handleToggleFavorite = () => {

    // Try to get stored favorites from local storage
    const storedFavorites = localStorage.getItem("favorites");
    // if exists, parse it, if not, save an empty array.
    let favoritesArray = storedFavorites ? JSON.parse(storedFavorites) : [];

    if (isFavorite) {
      // If the dentist is already a favorite, remove them, filter all that are not the current dentist id.
      const updatedFavorites = favoritesArray.filter(favId => favId !== dentista.id);
      // set the new array whit the removed id on local storage
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      // set the state of the component as Not favorite for conditional rendering of the heart.
      setIsFavorite(false);
    } else {
      // If the dentist is not a favorite, add them
      favoritesArray.push(dentista.id);
      localStorage.setItem("favorites", JSON.stringify(favoritesArray));
      setIsFavorite(true);
    }
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link key={dentista.id} to={`/dentista/${dentista.id}`}>
        <h4>{dentista.name}</h4>
        <h4>@{dentista.username}</h4>
        <h4>id: {dentista.id} {isFavorite? "❤️" :""}</h4>
      </Link>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={handleToggleFavorite} className="favButton">{!isFavorite? "Add Favorite": "Remove Favorite" }</button>
    </div>
  );
};

export default Card;
