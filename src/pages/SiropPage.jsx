import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import cardData from "../../cardData";
import "/siropPage.css";
import Trier from "../components/Trier";

function creatCard(item) {
    return (
      <Card
        key={item.id}
        image={item.image}
        imghover={item.hoverImage}
        name={item.name}
        price={item.price}
      />
    );
  }
const SiropPage = () => {
    return (
        <div>
            <Header/>
            <Trier />
            <hr  style={{width:"1100px", marginLeft:"400px" }}/>
            <div className="card-container-sirop" >
                  {cardData.map(creatCard)}
              </div>
            <Footer />
        </div>
    );
}

export default SiropPage;