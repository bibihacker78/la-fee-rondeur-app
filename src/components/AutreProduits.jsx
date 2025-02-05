import React from "react";
import cardData from "../../cardData";
import Card from "./Card";

const AutreProduits = () => {
    return (
        <div className="autres-produits">

            <div className="card-autre">
                {cardData.map((card) => (
                    <Card key={card.id} image={card.image} name={card.name} price={card.price} />
                ))}
            </div>
            <hr />


        </div>
    )
}

export default AutreProduits;