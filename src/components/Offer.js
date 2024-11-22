import React from "react";
import offer from "../assets/offer.svg";
import { FaArrowCircleRight } from "react-icons/fa";

const Offer = () => {
  return (
    <section className="px-8 w-full h-full flex md:justify-between md:flex-row flex-col-reverse gap-10 pt-20">
      <div className="flex flex-1 items-center">
        <img
          src={offer}
          width="773"
          height="687"
          className="object-contain w-full"
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col items-start justify-center gap-5 ">
        <h2 className="text-4xl font-bold">
          <span className="text-orange-500">Special</span> Offer
        </h2>
        <p className="text-gray-500  text-left max-w-xl">
          Embark on a shopping journey that redefines your experience with
          unmeatable deals. From premier selections to incredible savings, we
          offer unparalled value set us apart.
        </p>
        <p className="text-gray-500 max-w-xl  text-left">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the lofiest execptations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-5 ">
          <button className="text-white bg-orange-500 flex items-center gap-3 py-2 px-4 rounded-full">
            Shop now
            <FaArrowCircleRight className="" />
          </button>
          <button className="text-gray-400 border-2 border-gray-500 rounded-full py-2 px-4">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offer;
