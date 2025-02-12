import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Separateur from "./components/Separateur";
import Card from "./components/Card";
import Temoignage from "./components/Temoignage";
import Footer from "./components/Footer";
import cardData from "../cardData";
import ProductPage from "./pages/ProductPage";
import "./App.css";
import Section from "./components/Section";
import Conseil from "./pages/Conseil";
import SiropPage from "./pages/SiropPage";
import Apropos from "./pages/Apropos";
import ArticlePage from "./pages/ArticlePage";

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

function App() {
  const cardContainerRef = useRef(null); // Référence pour le conteneur des cartes

  // Fonction pour défiler à gauche
  const scrollLeft = () => {
    cardContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  // Fonction pour défiler à droite
  const scrollRight = () => {
    cardContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Carousel />
              <Separateur titre="Nouveautés" />
              <Section/>

              <Separateur titre="Apoutchou" />
              <div className="card-container" ref={cardContainerRef}>
                  {cardData.map(creatCard)}
              </div>
              <Separateur titre="Témoignages" />
              <Temoignage />
              <Footer />
            </div>
          }
        />
        <Route path="/" element={<App/>} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/conseil" element={<Conseil />} />
        <Route path="/sirop" element={<SiropPage />} />
        <Route path="/apropos" element={<Apropos/>} />
        <Route path="/article/:id" element={<ArticlePage />} />
        




      </Routes>
    </Router>
  );
}

export default App;
