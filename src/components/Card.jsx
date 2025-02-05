import React from "react";
import { Link } from "react-router-dom"; // Importation du Link pour la navigation

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={props.image}
          alt={props.name}
          className="card-image-default"
        />
        <img
          src={props.imghover}
          alt={props.name}
          className="card-image-hover"
        />
      </div>
      <div className="card-info">
        <h3>{props.name}</h3>
        <p>{props.price} €</p>
        <Link to={`/product/${props.id}`}>
          <button>Acheter</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
