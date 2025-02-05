import React from "react";
import cardData from "../../cardData";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  

const Section = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
    return (
      
        <div className="card-container2" >
              <Slider {...settings}>
                  {cardData.map(creatCard)}
              </Slider>
                </div>

    )
};
export default Section;