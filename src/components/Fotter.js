import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { SiNike } from "react-icons/si";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
const products = [
  {
    id: 1,
    name: "air force 1",
  },
  {
    id: 2,
    name: "air max 1",
  },
  {
    id: 3,
    name: "air jordan 1",
  },
  {
    id: 4,
    name: "air force 2",
  },
  {
    id: 5,
    name: "nike waffle racer",
  },
  {
    id: 6,
    name: "nike cortez",
  },
];

const help = [
  {
    id: 1,
    name: "About us",
  },
  {
    id: 2,
    name: "FAQs",
  },
  {
    id: 3,
    name: "How it works",
  },
  {
    id: 4,
    name: "Privacy Policy",
  },
  {
    id: 5,
    name: "Payment Policy",
  },
];

const get_in_touch = [
  {
    id: 1,
    name: "customer@nike.com",
  },
  {
    id: 2,
    name: "+92554862354",
  },
];

const fotter = [
  {
    id: 1,
    name: (
      <span className="flex items-center gap-1">
        <FaRegCopyright  size={20}/>
        <p>Copyright. All rights reserved</p>
      </span>
    ),
  },
  {
    id: 2,
    name: "Terms & Conditions",
  },
];

const information = [
  {
    id: 1,
    name: "Nike",
    logo: <SiNike size={30} className="inline" />,
    description:
      "Get shoess ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards",
    social: [
      {
        id: 1,
        icon: twitter,
      },
      {
        id: 2,
        icon: facebook,
      },
      {
        id: 3,
        icon: instagram,
      },
    ],
  },
];

const Fotter = () => {
  return (
    <section className="bg-black text-white w-full h-full mt-24 px-8 py-14 flex flex-col gap-10">
      <div className="flex justify-between flex-wrap gap-6">
        {information.map(({ id, logo, name, description, social }) => (
          <div key={id}>
            <div className="flex flex-col gap-5">
              <div className="flex gap-1 items-center">
                {logo}
                <h1 className="text-3xl capitalize font-bold text-left">
                  {name}
                </h1>
              </div>
              <p className="text-left text-sm lg:max-w-lg">{description}</p>
              <div className="flex gap-3 ">
                {social.map(({ id, icon }) => (
                  <p key={id} rel="noopener noreferrer">
                    <img
                      src={icon}
                      alt="social media icons "
                      className="bg-white rounded-full w-10 cursor-pointer"
                    />
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col items-start gap-1">
          <h2 className="font-bold text-lg capitalize">Products</h2>
          {products.map(({ id, name }) => (
            <p
              key={id}
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-400 capitalize cursor-pointer"
            >
              {name}
            </p>
          ))}
        </div>
        <div className="flex flex-col items-start gap-1">
          <h2 className="font-bold text-lg ">Help</h2>
          {help.map(({ id, name }) => (
            <p
              rel="noopener noreferrer"
              key={id}
              className="text-gray-500 capitalize hover:text-gray-400 cursor-pointer"
            >
              {name}
            </p>
          ))}
        </div>
        <div className="flex flex-col items-start gap-1">
          <h2 className="font-bold text-lg">Get in Touch</h2>
          {get_in_touch.map(({ id, name }) => (
            <p
              rel="noopener noreferrer"
              key={id}
              className="text-gray-500 capitalize hover:text-gray-400 cursor-pointer"
            >
              {name}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between md:gap-0 gap-4">
          {fotter.map(({ id, name }) => (
            <p key={id} className="text-sm">{name}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fotter;
