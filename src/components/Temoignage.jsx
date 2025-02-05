import React, { useState } from "react";

function Temoignage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const temoignages = [
    {
      mot: "Qualité",
      texte: "Le service est excellent, j'ai été impressionné par la rapidité et la qualité.",
      nom: "@Marie Dupont",
    },
    {
      mot: "Professionnalisme",
      texte: "Une équipe très professionnelle qui comprend les besoins de ses clients.",
      nom: "@Paul Leclerc",
    },
    {
      mot: "Confiance",
      texte: "Je recommande vivement ! Tout a été transparent et fiable.",
      nom: "@Sophie Martin",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + temoignages.length) % temoignages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % temoignages.length);
  };

  return (
    <div className="temoignage-container">
      <div className="temoignage">
        <button className="prev" onClick={handlePrev}>
        <i class="fa-solid fa-arrow-left"></i>
        </button>

        <div className="temoignage-block">
          <div className="quote-icon top">
          <i class="fa-solid fa-quote-left"></i>
          </div>

          <div className="content">
            <div className="mot">{temoignages[currentIndex].mot}</div>
            <div className="texte">{temoignages[currentIndex].texte}</div>
            <div className="nom">{temoignages[currentIndex].nom}</div>
          </div>

          <div className="quote-icon bottom">
          <i class="fa-solid fa-quote-right"></i>
          </div>
        </div>

        <button className="next" onClick={handleNext}>
        <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      
    </div>
    
  );
}

export default Temoignage;
