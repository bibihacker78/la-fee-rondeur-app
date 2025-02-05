import React from "react";

const SectionPub = ()  => {
    return (
        <div className="section-pub text-center">
            <br />
            <div className="row ">
                <div className="col">
                   <div className="icon-pub">
                      <i class="fa-solid fa-truck-fast fa-lg"></i>
                    </div>
                    <h5>LIVRAISON RAPIDE</h5>
                    <h6>partout en cote d'voire et en France</h6>
                </div>
                <div className="col">
                    <div className="icon-pub">
                    <i class="fa-regular fa-credit-card fa-lg"></i>
                    </div>
                    <h5>PAIEMENT SÉCURISÉ</h5>
                    <h6>Par mobile money et carte Visa</h6>
                </div>
                <div className="col">
                    <div className="icon-pub">
                    <i class="fa-solid fa-certificate"></i>
                    </div>
                    <h5>PRODUIT SANS EFFETS SECONDAIRE</h5>
                    <h6>Fait a base de produits naturels</h6>
                </div>
                <div className="col">
                    <div className="icon-pub">
                    <i class="fa-solid fa-headset"></i>
                    </div>
                    <h5>ASSISTANCE 24h/24</h5>
                    <h6>Contactez-nous pour tout besoin</h6>
                </div>
            </div>
        </div>
    )
}
export default SectionPub;