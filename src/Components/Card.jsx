import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContextGlobal } from './utils/global.context';

const Card = ({ dentista }) => {

  // handle internal state of the card.
  const [isFavorite, setIsFavorite] = useState(false);
  // get favorites from context
  const {favs, setFavs, theme} = useContextGlobal();

  useEffect(() => {
      const ids = favs.map(fav => fav.id)
      if (ids.includes(dentista.id)){
        setIsFavorite(true)
      }
  }, [dentista.id, favs]);

  const handleToggleFavorite = () => {
    // if exists, parse it, if not, save an empty array.
    if (isFavorite) {
      // If the dentist is already a favorite, remove them, filter all that are not the current dentist id.
      const updatedFavs = favs.filter(fav => fav.id !== dentista.id);
      setFavs(updatedFavs)
      setIsFavorite(false);
    } else {
      // If the dentist is not a favorite, add them
      setFavs([...favs, dentista])
      setIsFavorite(true);
    }
  };

  return (
    <div className={`card ${theme === 'Dark' ? 'dark-theme' : 'light-theme'}`}>
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link key={dentista.id} to={`/dentista/${dentista.id}`}>
        <img src="../../public/images/doctor.jpg" alt="doctor-image" />
        <h4>{dentista.name}</h4>
        <h5>@{dentista.username} {isFavorite? "❤️" :""}</h5>
      </Link>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={handleToggleFavorite} className="favButton">{!isFavorite? "Add Favorite": "Remove Favorite" }</button>
    </div>
  );
};

export default Card;
