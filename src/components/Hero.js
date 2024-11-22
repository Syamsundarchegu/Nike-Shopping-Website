import React, { useState } from "react";
import "../components/Hero.css";
import shoe1 from "../assets/big-shoe1.png";
import shoe2 from "../assets/big-shoe2.png";
import shoe3 from "../assets/big-shoe3.png";
import { IoArrowForwardCircle } from "react-icons/io5";

const images = [
  { id: 1, src: shoe1 },
  { id: 2, src: shoe2 },
  { id: 3, src: shoe3 },
];

const ratings = [
  { id: 1, likes: "1k+", name: "brands" },
  { id: 2, likes: "500+", name: "shops" },
  { id: 3, likes: "250k+", name: "customers" },
];

const Hero = () => {
  const [image, setImage] = useState(shoe1);
  return (
    <section
      className="w-full min-h-screen
      xl:justify-between xl:flex-row flex flex-col md:gap-10 gap-5 pb-20 "
    >
      <div className=" md:w-2/5 pt-28 flex flex-col justify-center w-full md:px-8 px-4">
        <div>
          <p className="text-left text-2xl text-orange-500 mt-2">
            Our Summer Collections
          </p>

          <h1 className="md:text-8xl font-bold mt-6 md:mt-12 text-left text-4xl">
            <span className=" capitalize  text-left relative md:whitespace-nowrap z-10 xl:bg-white">
              the new arrival
            </span>
            <br />
            <span className=" capitalize text-orange-500 ">nike</span> Shoes
          </h1>

          <p className="text-1xl text-gray-500 mt-6 md:mt-12 text-left">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            you active life.
          </p>
          <button className="cursor-pointer relative z-10 text-white flex items-center mt-6 md:mt-12 px-4 py-2 rounded-full gap-2 bg-orange-500 ">
            Shop Now
            <IoArrowForwardCircle size={20} />
          </button>
          <div className="flex mt-10 md:mt-20 gap-8">
            {ratings.map(({ id, likes, name }) => (
              <div className="flex flex-col items-start">
                <span key={id} className="md:text-5xl text-2xl font-bold">
                  {likes}
                </span>{" "}
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="flex-1 bg-hero flex flex-col items-center
      justify-center w-full relative "
      >
        <img
          src={image}
          alt=""
          className="object-contain relative z-10 max-w-[500px] w-full h-auto"
        />
        <div className="absolute sm:-left-[-10%] -bottom-[5%] flex gap-4 z-10 md:pl-20 ">
          {images.map(({ id, src }) => (
            <img
              key={id}
              src={src}
              alt=""
              className={`bg-hero object-contain cursor-pointer rounded-md w-20
                ${
                  image === src ? "border-2 border-orange-500" : "border-none"
                }`}
              onClick={() => setImage(src)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
