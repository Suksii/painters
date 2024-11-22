import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const painters = [
    { name: "Đokaj Đeljoš", link: "/djokaj_djeljos" },
    { name: "Gjokaj Agron", link: "/gjokaj_agron" },
    { name: "Kapllani Edin", link: "/kapllani_edin" },
    { name: "Prelvukaj Zake", link: "/prelvukaj_zake" },
    { name: "Rijevac Mašanovic Renata", link: "/rijevac_masanovic_renata" },
    { name: "Kolja Berišaj", link: "/kolja_berisaj" },
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl">
      <h2 className="text-3xl font-bold text-white py-6 text-center border-b border-gray-700">
        Slikari
      </h2>
      <div className="flex-grow">
        {painters.map((painter, index) => (
          <Link
            to={painter.link}
            key={index}
            className="w-full block px-6 py-4 hover:bg-gray-700 transition duration-300"
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
      >
        Početna
      </Link>
    </div>
  );
};

export default Sidebar;
