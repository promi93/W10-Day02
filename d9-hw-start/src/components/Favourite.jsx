import React from "react";
import { connect } from "react-redux";
import { removeFavorite } from "../actions";

const Favorites = ({ favorites, removeFavorite }) => {
  const handleRemoveFavorite = (company) => {
    removeFavorite(company);
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

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  removeFavorite: (company) => dispatch(removeFavorite(company)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
