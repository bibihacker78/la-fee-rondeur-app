import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/assets/Carousel3.jpg", 
    "/assets/Carousel2.jpg",
    "/assets/Carousel3.jpg"
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel" id="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="btn prev" onClick={handlePrev}>
      <i class="fa-solid fa-arrow-left"></i>
      </button>
      <button className="btn next" onClick={handleNext}>
      <i class="fa-solid fa-arrow-right"></i>

      </button>
    </div>
  );
};

export default Carousel;
