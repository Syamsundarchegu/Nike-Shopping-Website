import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { SiNike } from "react-icons/si";

const links = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "About Us",
  },
  {
    id: 3,
    title: "Products",
  },
  {
    id: 4,
    title: "Contact Us",
  },
];

const social_links = [
  { id: 1, title: "Sign Up" },
  { id: 2, title: "Login" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <section className="absolute z-10 w-full min-h-screen p-8">
      <header>
        <nav className="flex justify-between">
          <div className="flex gap-2 lg:gap-3 items-center">
            <SiNike className="text-orange-500 text-sm" size={40} />
            <h1 className="text-1.5xl lg:text-3xl font-bold text-orange-500">
              Nike
            </h1>
          </div>
          <ul className="hidden md:flex gap-4 lg:gap-8 lg:text-3xl text-1xl cursor-pointer text-gray-400">
            {links.map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
          <ul className="hidden md:flex lg:text-3xl text-1xl gap-2 lg:gap-4 cursor-pointer">
            {social_links.map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
          <div
            className="md:hidden md:text-lg text-sm"
            onClick={() => {
              setNav(!nav);
            }}
          >
            {nav ? <RxCross1 size={30} /> : <FaBars size={30} />}
          </div>
          {nav && (
            <ul className=" bg-orange-500 absolute right-1 top-20 flex flex-col items-start py-5 px-2 cursor-pointer rounded-md">
              {links.map(({ id, title }) => (
                <li key={id}>{title}</li>
              ))}
            </ul>
          )}
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
