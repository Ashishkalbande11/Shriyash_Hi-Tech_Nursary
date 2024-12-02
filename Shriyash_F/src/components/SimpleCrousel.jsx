import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/img5.jpg";
import img2 from "../images/img1.jpg";
import img3 from "../images/img2.jpeg";
import img4 from "../images/Watermelonseed.webp";
import img5 from "../images/img6.jpg";
import img6 from "../images/img8.webp";
import img7 from "../images/chilliseed.webp";



const SimpleCarousel = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in ms
    arrows: true, // Show next/prev arrows
    responsive: [
      {
        breakpoint: 768, // Breakpoint for tablets and below
        settings: {
          slidesToShow: 1, // Show 1 slide in mobile view
        },
      },
    ],
  };

  const slides = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className="mt-10 p-4 bg-[#9ed1a6] rounded-lg h-[380px]">
      <Slider {...settings}>
        {slides.map((src, index) => (
          <div key={index} className="flex justify-center items-center h-80 bg-[#9ed1a6] pr-2">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleCarousel;
