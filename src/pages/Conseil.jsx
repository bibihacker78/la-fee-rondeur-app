import { faDigitalOcean } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import "/conseil.css"
import Footer from "../components/Footer";
import ConseilComponent from "../components/ConseilComponents";
import conseilData from "../../conseilData";






const Conseil = () => {
  const navigate = useNavigate();
    return (

        <div>

            <Header />

            <div className="container-conseil">
        {conseilData.map((item) => (
          <div key={item.id} onClick={() => navigate(`/article/${item.id}`)} style={{ cursor: "pointer" }}>
            <ConseilComponent
              image={item.img}
              titre={item.titre}
              info={item.info}
              date={item.date}
            />
          </div>
        ))}
      </div>


            <div className="aside">
          <h5 class="fst-italic">FAQ – Réponses aux Questions Fréquentes</h5>
          <ul class="list-unstyled">
            <li>
              <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                <div class="col-lg-12">
                  <h6 class="mb-0">📌 En combien de temps verrai-je les résultats ?</h6>
                  <p>Les premiers résultats peuvent apparaître après 3 à 6 semaines d’utilisation régulière.</p>
                  
                </div>
              </a>
            </li>
            <li>
              <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                <div class="col-lg-12">
                <h6 class="mb-0">📌 Puis-je utiliser plusieurs produits en même temps ?
                </h6>
                <p>Oui, mais il est conseillé de bien espacer l’application et d’observer les effets avant d’en combiner plusieurs.</p>

                </div>
              </a>
            </li>
            <li>
              <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                <div class="col-lg-12">
                <h6 class="mb-0">📌 Y a-t-il des contre-indications ?</h6>
                <p>Nos produits sont naturels, mais en cas de doute (grossesse, allergies), consultez un professionnel de santé avant utilisation.</p>

                </div>
              </a>
            </li>
          </ul>
        </div>
        <Footer />

        </div>
    )
}

export default Conseil;