import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import shoe1 from "../assets/shoe4.svg";
import shoe2 from "../assets/shoe5.svg";
import shoe3 from "../assets/shoe6.svg";
import shoe4 from "../assets/shoe7.svg";

const infromation = [
  {
    id: 1,
    src: shoe1,
    star: <TiStarFullOutline size={20} className="text-orange-500" />,
    rating: "(4.5)",
    title: "nike air jordan-01",
    price: "$200.20",
  },
  {
    id: 2,
    src: shoe2,
    star: <TiStarFullOutline size={20} className="text-orange-500" />,
    rating: "(4.5)",
    title: "nike air jordan-01",
    price: "$200.20",
  },
  {
    id: 3,
    src: shoe3,
    star: <TiStarFullOutline size={20} className="text-orange-500" />,
    rating: "(4.5)",
    title: "nike air jordan-01",
    price: "$200.20",
  },
  {
    id: 4,
    src: shoe4,
    star: <TiStarFullOutline size={20} className="text-orange-500" />,
    rating: "(4.5)",
    title: "nike air jordan-01",
    price: "$200.20",
  },
];

const Products = () => {
  return (
    <section className="px-8 w-full h-full pt-24">
      <div className="flex flex-col items-start gap-5">
        <p className="text-2xl md:text-3xl text-left capitalize font-semibold">
          our <span className="text-orange-500">popular</span> products
        </p>
        <p className="text-left">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {infromation.map(({ id, src, star, rating, title, price }) => (
          <div className="flex flex-col flex-1 gap-4 w-full items-center sm:items-start">
            <img
              key={id}
              src={src}
              alt=""
              className="object-contain rounded-md w-[282px] h-[282px]"
            />
            <div className="flex items-center gap-2 ">
              {star}
              <span className="text-black">{rating}</span>
            </div>
            <p className="text-left text-2xl font-semibold capitalize ">
              {title}
            </p>
            <p className="text-left sm:text-sm md:text-lg text-orange-500 font-semibold">
              {price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
