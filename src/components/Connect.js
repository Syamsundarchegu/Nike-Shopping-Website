import React from "react";

const Connect = () => {
  return (
    <section className="px-8 w-full h-full mt-24">
      <div className="flex md:justify-between md:flex-row flex-col items-center md:gap-10 gap-6 w-full">
        <div className="md:w-1/2 w-full">
          <h1 className="md:text-5xl text-4xl capitalize font-bold text-left">
            sign up for <span className="text-orange-500">updates</span> &
            newsletter
          </h1>
        </div>
        <div className=" flex items-center md:w-1/2 relative w-full">
          <input
            type="text"
            placeholder="subscribe@nike.com"
            className="text-gray-400 rounded-full border-2 border-gray-400 focus:outline-none outline-none w-full md:py-7 py-4 md:text-lg text-sm"
          />
          <button
            type="submit"
            className=" rounded-full text-white  bg-orange-500 absolute md:right-1 right-1 md:py-7 md:px-6 py-3 px-3"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Connect;
