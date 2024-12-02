import React from "react";
import review from "../images/review.jpg"

const About = () => {
  return (
    <>
    <div className="w-[80%] mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">About Us</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Welcome to <strong className="text-green-600">Shriyash Hi-Tech Nursery</strong>, where we nurture the seeds of tomorrow. 
        Our nursery is dedicated to providing a wide variety of plants, trees, and gardening essentials to help your 
        garden bloom with life.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        At Shriyash Hi-Tech, we believe in sustainability and eco-friendly practices. Every plant we grow is handled 
        with care to ensure its health and vitality. Whether you're a seasoned gardener or just beginning your 
        green journey, we are here to assist you every step of the way.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Explore our collection and discover the joy of growing with GreenSprout Nursery.
      </p>
    </div>
   

    <div className="w-[80%] mx-auto my-12 p-6 bg-white shadow-lg rounded-lg" >
    <h2 className="text-3xl font-bold text-green-700 text-center mb-6">Review</h2>
      <img src={review} alt="" />
    </div>
    </>
  );
};

export default About;
