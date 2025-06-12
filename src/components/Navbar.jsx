import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 fixed w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/home"} className="self-center text-2xl font-semibold whitespace-nowrap">
          STEFANO SPEDICATO
        </Link>
        {/* Bottone Hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center  w-10 h-10 justify-center text-sm text-black rounded md:hidden hover:bg-black hover:text-white transition duration-500"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          {!isOpen ? <RiMenu3Fill className="w-10 h-10" /> : <IoCloseOutline className="w-10 h-10" />}
        </button>
        {/* Menu Navigazione */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white md:space-x-2">
            {["Home", "About", "Progetti", "Contatti"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="relative block py-2 px-4 text-black mb-3 md:mb-0 rounded-sm 
          before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-black 
          before:transition-all before:duration-700 before:ease-in-out hover:before:w-full 
          hover:text-white uppercase transition duration-500 ease-in-out"
                  onClick={() => setIsOpen(false)}>
                  <span className="relative z-10">{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
