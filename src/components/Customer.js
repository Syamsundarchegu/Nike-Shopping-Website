import React from "react";
import image1 from "../assets/customer1.jpeg";
import image2 from "../assets/customer2.svg";
import { TiStarFullOutline } from "react-icons/ti";

const information = [
  {
    id: 1,
    src: image1,
    description:
      "The attention to detail and the quality of the product exceeded my expectations Highly recommended!",
    star: <TiStarFullOutline size={30} className="text-orange-500" />,
    rating: "4.5",
  },
  {
    id: 2,
    src: image2,
    description:
      "The product not only met but exceeded my exceptations. I'll definitely be a returning customer!",
    star: <TiStarFullOutline size={30} className="text-orange-500" />,
    rating: "4.5",
  },
];

const Customer = () => {
  return (
    <section className="bg-purple-100 w-full min-h-screen flex flex-col justify-center items-center md:gap-10 gap-16 mt-24">
      <div className="flex flex-col items-center">
        <h1 className="capitalize font-bold md:text-5xl text-3xl pb-4 ">
          what our <span className="text-orange-500">Customers</span> say?
        </h1>
        <p className="text-gray-400 md:max-w-lg max-w-sm md:text-lg text-sm">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex md:justify-between gap-6 md:flex-row flex-col">
        {information.map(({ id, src, description, star, rating }) => (
          <div key={id} className="flex flex-col items-center md:gap-5 gap-2">
            <img src={src} className="rounded-full w-28" alt="deli" />
            <p className="text-gray-400 md:max-w-lg max-w-sm md:text-lg text-sm">
              {description}
            </p>
            <div className="flex md:gap-2 gap-1 text-orange-500 items-center">
              {star}
              <span className="text-gray-500 md:text-lg text-sm">{rating}</span>
            </div>
          </div>
        ))}

        <div></div>
      </div>
    </section>
  );
};

export default Customer;
