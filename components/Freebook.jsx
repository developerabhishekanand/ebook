import React from 'react'
import list from "../data/list.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../components/Card";
import SliderStyle from "../styles/sliderStyle";
const Freebook = () => {
    const filterData = list.filter((data) => data.category === "Free");
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <SliderStyle>
      <div className="slider-container">
        <Slider {...settings}>
          {filterData.map((item)=> (
            <Card item={item} key={item.id} />
          )
          )}
        </Slider>
    </div>
    </SliderStyle>
  )
}

export default Freebook
