import React from "react";
import { connect } from "react-redux";
import { addFavorite } from "../actions";

const CompanyCard = ({ company, addFavorite }) => {
  const handleAddFavorite = () => {
    addFavorite(company);
  };

  return (
    <div className="company-card">
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      <button onClick={handleAddFavorite}>Aggiungi ai preferiti</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (company) => dispatch(addFavorite(company)),
});

export default connect(null, mapDispatchToProps)(CompanyCard);
