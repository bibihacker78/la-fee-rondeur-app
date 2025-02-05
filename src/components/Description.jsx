import React, { useState } from "react";
import StarRating from "./StarRating";

const Description = () => {

  const handleRatingChange = (newRating) => {
    console.log("Nouvelle note : ", newRating);
    // Vous pouvez stocker la note dans un état global ou envoyer au backend
  };

  const [activeTab, setActiveTab] = useState("description");

    // Fonction pour déterminer la classe dynamique de `tab-content`
    const getTabContentClass = () => {
        switch (activeTab) {
          case "description":
            return "tab-content description-border";
          case "avis":
            return "tab-content avis-border";
          case "paiements":
            return "tab-content paiements-border";
          default:
            return "tab-content";
        }
      };

  return (
    <div className="section-description">
     
      <ul className="tab">
        <li
          className={`description-title ${activeTab === "description" ? "active" : ""}`}
          onClick={() => setActiveTab("description")}
        >
          DESCRIPTION
        </li>
        <li
          className={`description-title ${activeTab === "avis" ? "active" : ""}`}
          onClick={() => setActiveTab("avis")}
        >
          AVIS
        </li>
        <li
          className={`description-title ${activeTab === "paiements" ? "active" : ""}`}
          onClick={() => setActiveTab("paiements")}
        >
          PAIEMENTS ET LIVRAISON
        </li>
      </ul>

      {/* Contenu des onglets */}
      <div className={getTabContentClass()} >
        {activeTab === "description" && (
          <div className="description-content">
            <h4>Bénéfices</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id velit vel metus lobortis vulputate. Donec
              auctor est vel ligula facilisis, in ultricies tellus dictum. Nulla facilisi.
            </p>
            <h4>Conseil d'utilisation</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias aspernatur tempora sed dolor, eligendi quo ipsa id! Enim at officia cumque, corrupti tempora eum et minima beatae omnis in?</p>
            <h4>Ingrédients</h4>
          </div>
        )}
        {activeTab === "avis" && (
          <div className="avis-content">
            <form action="post" className="form-avis">
            <h4>Notez ce produit : </h4>
            <StarRating totalStars={5} onRatingChange={handleRatingChange} />
            <h4>Votre avis : </h4>
              <textarea name="avis" id="avis" cols="50" rows="7"></textarea>
              <div className="form-group">
              <p className="form-nom">
              
              <input type="text" placeholder=" Nom" />
              </p>
              <p className="form-email">
               
              <input type="text" placeholder=" Adresse e-mail"  />
              </p>
              </div>

              <button type="submit">SOUMETTRE L'AVIS</button>
            </form>
            <p className="avis-general">Il n'y a pas d'avis pour le moment...</p>


          </div>
        )}
        {activeTab === "paiements" && (
          <div className="paiements-content">
            <h3>Comment se fait le paiements ?</h3>
            <p>Vous avez plusieurs moyens de paiement à votre disposition: le paiement à la livraison, le paiement par carte bancaire, par Orange Money, par Wari… <br /> 
               <span>Paiement à la livraison:</span>Il se fait au moment de la réception de la commande. Il faudra dans ce cas prévoir le montant exact de la commande, afin d’éviter des désagréments de monnaies. <br />
              <span>Paiement en ligne: </span> Grace à Paydunya (le leader des solutions de paiement sécurisés au Sénégal), vous pouvez payer directement sur notre site avec votre carte bancaire (VISA/MasterCard), avec Orange Money, avec Wari ou avec Poste Cash...</p> <br />
              <h3>La livraison se fait en combien de temps ?</h3>
              <p>Nous sommes actuellement en train de développer notre service de livraison. Vous pouvez contacter notre service clientèle pour plus de détails ou pour obtenir une estimation de temps de livraison. Nous vous remercions de votre compréhension.</p>
          </div>

        )}
      </div>
    </div>
  );
};

export default Description;
