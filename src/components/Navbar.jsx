import React, { useState } from "react";
import { Link } from "react-router-dom"; // Fix the import statement
import { styles } from "../style";
import { navLinks } from "../constants";
import { name } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX}w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={name}
            alt="logo"
            className="w-9 h-9 object-contain"
            style={{ height: "150px", width: "120px" }}
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => {
            <li>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
