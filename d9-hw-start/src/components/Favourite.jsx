import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "/actions";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (company) => {
    dispatch(removeFavorite(company));
  };

  return (
    <div className="favorites">
      <h2>Aziende Preferite</h2>
      <ul>
        {favorites.map((company) => (
          <li key={company}>
            <button onClick={() => handleRemoveFavorite(company)}>
              Rimuovi dai preferiti
            </button>
            <span>{company}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
