import React, { useState } from "react";
import Header from "../components/Header";
import productsData from "/home/bintou/la-fee-rondeur-app/ProductsData.js";
import Description from "../components/Description";
import Footer from "../components/Footer";
import AutreProduits from "../components/AutreProduits";
import Separateur from "../components/Separateur";
import SectionPub from "../components/SectionPub";

const ProductPage = () => {
  const id = "1"; // Vous pouvez changer l'ID pour tester d'autres produits

  const product = productsData.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(0);
  const [mainImage, setMainImage] = useState(product?.image);

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
  };

  if (!product) {
    return (
      <div>
        <Header />
        <h2>Produit non trouvé</h2>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="product-page">
        <div className="product-image-container">
          <img src={mainImage} alt={product.name} className="product-image" />
          <div className="small-img-group">
            {product.images && product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Produit ${index}`}
                className="small-img"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">{product.price} €</p>
          <p className="product-description">{product.description}</p>
          
          {/* Compteur et bouton */}
          <div className="product-actions">
            <button onClick={handleAddToCart} className="add-to-cart-button">
              AJOUTER AU PANIER
            </button>
            <p className="quantity-counter">Articles ajoutés : {quantity}</p>
          </div>

          <div className="share">
            <h6>Partagez ce produit</h6>
            <div className="share-icon">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>

      <Description />
      <br />
      <Separateur titre="Vous aimeriez aussi" />
      <AutreProduits /> 
      <SectionPub />
      <Footer/>
    </div>
  );
};

export default ProductPage;
