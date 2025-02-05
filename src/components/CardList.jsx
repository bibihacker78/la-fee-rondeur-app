import React from "react";
import Card from "./Card"; // Importation de ton composant Card
import cardData from "../../cardData";
import "/home/bintou/la-fee-rondeur-app/src/CardList.css"

const CardList = ({ cardData }) => {
  // Vérifie si cardData est défini et est un tableau avant de mapper
  if (!cardData || !Array.isArray(cardData)) {
    return <div>Aucune donnée disponible</div>;
  }

  return (
    <div className="card-container">
      {cardData.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          image={product.image}
          imghover={product.imghover}
          name={product.name}
          price={product.price}
        />
      ))}
      console.log(cardData);

    </div>
  );
};

export default CardList;
