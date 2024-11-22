import React from "react";
import shoe from "../assets/shoe8.svg";

const Quality = () => {
  return (
    <section className="w-full px-8 h-full pt-24">
      <div className="flex md:justify-between md:gap-10 gap-5 flex-col md:flex-row ">
        <div className="flex flex-1 flex-col items-start gap-4 justify-center">
          <h2 className="font-bold text-4xl capitalize lg:max-w-lg text-left">
            we provide you{" "}
            <span className="text-orange-500">super quality</span> shoes
          </h2>
          <p className="text-gray-500 text-left mt-4 lg:max-w-lg">
            Enusuring premium comfort and style, our meticulously crafted
            foortwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="text-gray-500 mt-6 text-left">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <button className="rounded-full text-white px-4 py-2 bg-orange-500 font-bold">
            View details
          </button>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img
            src={shoe}
            alt="Shoe"
            className="object-contain"
            width="570"
            height="522"
          />
        </div>
      </div>
    </section>
  );
};

export default Quality;
