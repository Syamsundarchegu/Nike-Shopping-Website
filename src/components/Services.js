import React from "react";
import truck from "../assets/truck-fast.svg";
import sheild from "../assets/shield-tick.svg";
import hand from "../assets/support.svg";

const information = [
  {
    id: 1,
    logo: truck,
    title: "Free shipping",
    description:
      "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    id: 2,
    logo: sheild,
    title: "Secure Payment",
    description:
      "Experience worry-free transcation with our secure payment options.",
  },
  {
    id: 3,
    logo: hand,
    title: "Love to help you",
    description:
      "Our dedicated team is here to assist you every step of the way.",
  },
];

const Services = () => {
  return (
    <section className="px-8 pt-20 w-full h-full pb-10 flex flex-col">
      <div className="flex md:justify-between md:flex-row gap-5 flex-col ">
        {information.map(({ id, logo, title, description }) => (
          <div
            key={id}
            className=" rounded-lg flex flex-1 justify-between flex-col w-full items-start gap-4 shadow-2xl px-10 py-16"
          >
            <div className="w-11 h-11 flex justify-center items-center bg-orange-500 rounded-full">
              <img
                src={logo}
                alt=""
                className="bg-orange-500 rounded-xl"
                width="24"
                height="24"
              />
            </div>
            <h3 className="text-left text-xl font-semibold">{title}</h3>
            <p className="text-left text-sm text-gray-400 max-w-sm">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
