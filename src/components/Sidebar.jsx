import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = useLocation().pathname;

  const painters = [
    { name: "Đokaj Đeljoš", link: "/djokaj_djeljos" },
    { name: "Gjokaj Agron", link: "/gjokaj_agron" },
    { name: "Kapllani Edin", link: "/kapllani_edin" },
    { name: "Nimanbegu Hasanaga Vahida", link: "/nimanbegu_hasanaga_vahida" },
    { name: "Prelvukaj Zake", link: "/prelvukaj_zake" },
    { name: "Rijevac Mašanovic Renata", link: "/rijevac_masanovic_renata" },
    { name: "Kolja Berišaj", link: "/kolja_berisaj" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 text-white bg-gray-800 p-2 rounded-lg z-50"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>
      <div
        className={`fixed md:sticky left-0 top-0 w-fit text-nowrap flex flex-col h-screen bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-40`}
      >
        <h2 className="text-3xl font-bold text-white py-6 text-center border-b border-gray-700">
          Slikari
        </h2>
        <div className="flex-grow">
          {painters.map((painter, index) => (
            <Link
              to={painter.link}
              onClick={() => {
                scrollToTop();
                setIsOpen(false);
              }}
              key={index}
              className={`w-full block px-6 py-4 hover:bg-gray-700 transition duration-300 ${
                path === painter.link ? "bg-gray-700" : ""
              }`}
            >
              <p className="text-lg text-gray-100 font-medium">
                {painter.name}
              </p>
            </Link>
          ))}
        </div>
        <Link
          to="/"
          className="text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 m-4 rounded-lg transition duration-300"
          onClick={() => {
            scrollToTop();
            setIsOpen(false);
          }}
        >
          Početna
        </Link>
      </div>
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-50" />
      )}
    </>
  );
};

export default Sidebar;
